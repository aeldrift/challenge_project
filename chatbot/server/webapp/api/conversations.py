import base64
import mimetypes

from bots.summarize import generate_conversation_summary
from common.config import DEFAULT_LLM_CONTEXT
from common.models import (
    Attachment,
    AttachmentUploadResponse,
    Conversation,
    ConversationCreateModel,
    ConversationModel,
    ConversationUpdateModel,
    Message,
    MessageCreateModel,
    MessageModel,
)
from fastapi import (
    APIRouter,
    BackgroundTasks,
    Depends,
    File,
    HTTPException,
    UploadFile,
    status,
)
from pydantic import ValidationError
from sqlalchemy import delete, select, update
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import joinedload
from webapp import get_db

router = APIRouter(prefix="/conversations")


@router.get("", response_model=list[ConversationModel], name="Get Conversations")
async def get_conversations(
    page: int = 1,
    per_page: int = 10,
    archived: bool = False,
    q: str | None = None,
    db: AsyncSession = Depends(get_db),
):
    """
    Retrieve a list of conversations with optional pagination and filtering.

    Args:
        page (int): The page number for pagination. Defaults to 1.
        per_page (int): The number of items per page for pagination. Defaults to 10.
        archived (bool): Filter conversations by archived status. Defaults to False.
        q (str | None): Optional query parameter to search for a conversation by ID.
        db (AsyncSession): Database session dependency.

    Returns:
        list[ConversationModel]: A list of conversation models.

    Raises:
        HTTPException: If the page or per_page is less than 1.
        HTTPException: If a conversation with the specified ID is not found.
    """
    if page < 1:
        raise HTTPException(status_code=400, detail="Page must be greater than 0")
    if per_page < 1:
        raise HTTPException(status_code=400, detail="Per page must be greater than 0")

    # If a query is provided, search by conversation ID
    if q:
        result = await db.execute(select(Conversation).where(Conversation.conversation_id == q))
        conversation = result.scalar_one_or_none()
        if conversation:
            return [ConversationModel.model_validate(conversation)]
        else:
            raise HTTPException(status_code=404, detail="Conversation not found")

    # Calculate offset
    offset = (page - 1) * per_page

    # Get paginated results
    result = await db.execute(
        select(Conversation)
        .where(Conversation.archived == archived)
        .order_by(Conversation.updated_at.desc())
        .offset(offset)
        .limit(per_page)
    )
    conversations = result.scalars().all()

    return [ConversationModel.model_validate(conv) for conv in conversations]


@router.post("", response_model=ConversationModel, status_code=status.HTTP_201_CREATED)
async def create_conversation(
    conversation: ConversationCreateModel,
    db: AsyncSession = Depends(get_db),
):
    # Create new conversation
    new_convo = Conversation(
        title=conversation.title or "New conversation",
    )
    db.add(new_convo)

    if DEFAULT_LLM_CONTEXT:
        await db.flush()

        result = await db.execute(
            select(Conversation).where(Conversation.conversation_id == new_convo.conversation_id)
        )
        new_convo = result.scalar_one_or_none()

        if new_convo is None:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to create conversation",
            )

        for message_data in DEFAULT_LLM_CONTEXT:
            try:
                msg = MessageCreateModel.model_validate(message_data)
                await Message.create_message(db, str(new_convo.conversation_id), **msg.model_dump())
            except ValidationError:
                continue
    else:
        await db.commit()

    return ConversationModel.model_validate(new_convo)


@router.delete("/{conversation_id}", name="Delete Conversation")
async def delete_conversation(
    conversation_id: str,
    db: AsyncSession = Depends(get_db),
):
    """
    Delete a conversation by its ID.

    Args:
        conversation_id (str): The unique identifier of the conversation to delete.
        db (AsyncSession): Database session dependency.

    Returns:
        dict: A message confirming successful deletion.

    Raises:
        HTTPException: If the conversation with the specified ID is not found (404).
    """
    result = await db.execute(
        select(Conversation).where(Conversation.conversation_id == conversation_id)
    )
    convo = result.scalar_one_or_none()
    if convo is None:
        raise HTTPException(status_code=404, detail="Conversation not found")

    await db.execute(delete(Conversation).where(Conversation.conversation_id == conversation_id))
    await db.commit()
    return {"detail": "Conversation deleted successfully"}


@router.put("/{conversation_id}", response_model=ConversationModel, name="Update Conversation")
async def update_conversation(
    conversation_id: str,
    conversation_update: ConversationUpdateModel,
    db: AsyncSession = Depends(get_db),
):
    result = await db.execute(
        select(Conversation).where(Conversation.conversation_id == conversation_id)
    )
    conversation = result.scalar_one_or_none()

    if not conversation:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Conversation not found")

    update_data = conversation_update.model_dump(exclude_unset=True)

    if update_data:
        await db.execute(
            update(Conversation)
            .where(Conversation.conversation_id == conversation_id)
            .values(**update_data)
        )

    await db.commit()
    await db.refresh(conversation)

    return ConversationModel.model_validate(conversation)


@router.get(
    "/{conversation_id}/messages", response_model=dict, name="Get Conversation and Messages"
)
async def get_conversation_messages(
    conversation_id: str,
    background_tasks: BackgroundTasks,
    db: AsyncSession = Depends(get_db),
):
    """
    Retrieve a conversation and its associated messages by conversation ID.

    Args:
        conversation_id (str): The unique identifier of the conversation to retrieve.
        db (AsyncSession): Database session dependency.

    Returns:
        dict: A dictionary containing the conversation and a list of its messages.

    Raises:
        HTTPException: If the conversation with the specified ID is not found (404).
    """
    result = await db.execute(
        select(Conversation)
        .options(joinedload(Conversation.messages))
        .where(Conversation.conversation_id == conversation_id)
    )

    conversation = result.scalars().first()

    if not conversation:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Conversation not found")

    result = await db.execute(
        select(Message)
        .where(Message.conversation_id == conversation_id)
        .order_by(Message.message_number)
    )

    messages = result.scalars().all()

    # Generate title summary if conversation has no title and has more than 3 messages
    message_count = len(messages)
    if conversation.title == "New conversation" and message_count > 3:
        background_tasks.add_task(generate_conversation_summary, conversation_id, db)

    return {
        "conversation": ConversationModel.model_validate(conversation),
        "messages": [MessageModel.model_validate(msg) for msg in messages],
    }


@router.post(
    "/{conversation_id}/messages", response_model=MessageModel, status_code=status.HTTP_201_CREATED
)
async def create_message(
    conversation_id: str,
    message: MessageCreateModel,
    db: AsyncSession = Depends(get_db),
):
    """
    Create a new message in a specified conversation.

    Args:
        conversation_id (str): The unique identifier of the conversation to add the message to.
        message (MessageCreateModel): The message data containing content and optional metadata.
        db (AsyncSession): Database session dependency.

    Returns:
        MessageModel: The newly created message with all its fields populated.

    Raises:
        HTTPException: If the conversation with the specified ID is not found (404).
    """
    conversation_result = await db.execute(
        select(Conversation).where(Conversation.conversation_id == conversation_id)
    )
    conversation = conversation_result.scalars().first()

    if not conversation:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Conversation not found")

    new_message = await Message.create_message(
        db, conversation_id, message.content, message.extra_metadata
    )

    return MessageModel.model_validate(new_message)


@router.post("/upload", response_model=AttachmentUploadResponse)
async def upload_file(file: UploadFile = File(...), db: AsyncSession = Depends(get_db)):
    try:
        # Read and validate file
        content = await file.read()
        if len(content) > 20 * 1024 * 1024:  # 20MB limit
            raise HTTPException(status_code=400, detail="File is over 20MB")

        # Convert to base64
        base64_data = base64.b64encode(content).decode("utf-8")

        # Create attachment without message_id
        attachment = Attachment(
            file_data=base64_data,
            file_type=file.content_type or mimetypes.guess_type(file.filename or "")[0],
        )

        db.add(attachment)
        await db.commit()
        await db.refresh(attachment)

        return AttachmentUploadResponse.model_validate(attachment)
    except Exception as e:
        await db.rollback()
        raise HTTPException(status_code=500, detail=str(e))
