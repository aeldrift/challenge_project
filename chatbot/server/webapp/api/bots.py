from bots.http.bot import http_bot_pipeline
from bots.types import BotParams
from bots.webrtc.bot import bot_create, bot_launch
from common.config import DEFAULT_BOT_CONFIG, SERVICE_API_KEYS
from common.database import default_session_factory
from common.models import Attachment, Conversation
from fastapi import APIRouter, Depends, HTTPException, status, File, UploadFile, Form
from fastapi.responses import JSONResponse, StreamingResponse
from loguru import logger
from sqlalchemy.ext.asyncio import AsyncSession
from webapp import get_db
from google import genai
from common.config import SERVICE_API_KEYS
from loguru import logger as logging

from google import genai
import os


llm_api_key = SERVICE_API_KEYS.get("gemini")
client = genai.Client(api_key=llm_api_key)
router = APIRouter(prefix="/bot")


@router.post("/action", response_class=StreamingResponse)
async def stream_action(
    params: BotParams,
) -> StreamingResponse:
    """
    Single-turn HTTP action endpoint.

    This endpoint initiates a streaming response and returns chunks of the bot's
    response in real-time using server-sent events.

    Args:
        params (BotParams): Parameters for the bot interaction, must include:
            - conversation_id: UUID of the conversation to process
            - attachments: List of attachment IDs to include in the bot's response

    Returns:
        StreamingResponse: A streaming response with media type "text/event-stream"
            containing the bot's response chunks.

    Raises:
        HTTPException (400): When conversation_id is missing from params.
        HTTPException (404): When the specified conversation is not found.
        HTTPException (400): When service validation fails (via _validate_services).

    Flow:
        1. Validates the presence of conversation_id
        2. Checks if the conversation exists in the database
        3. Retrieves conversation history
        4. Validates bot services configuration
        5. Runs the bot pipeline and streams the response
    """
    if not params.conversation_id:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Missing conversation_id in params",
        )

    conversation = None

    # Early exit check that conversation exists before initiating a stream response
    async with default_session_factory() as db:
        conversation = await Conversation.get_conversation_by_id(params.conversation_id, db)
        if conversation is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Conversation {params.conversation_id} not found",
            )

    config = DEFAULT_BOT_CONFIG

    # Retrieve attachments from database
    attachments = []
    if params.attachments:
        attachments = await Attachment.get_attachments_by_ids(db, params.attachments)
        logger.debug(f"Retrieved {len(attachments)} attachments")

    async def generate():
        async with default_session_factory() as db:
            # Retrieve any existing messages for the conversation
            messages = [msg.content for msg in conversation.messages]
            # Run the single turn pipeline and yield text frames
            gen, task = await http_bot_pipeline(params, config, messages, attachments, db)
            async for chunk in gen:
                yield chunk
            await task

    return StreamingResponse(generate(), media_type="text/event-stream")


@router.post("/connect", response_class=JSONResponse)
async def connect(
    params: BotParams,
    db: AsyncSession = Depends(get_db),
):
    config = DEFAULT_BOT_CONFIG

    # Check which bot profile is requested and return a valid auth bundle to the RTVI client.

    # To support client transports such as Gemini that connect directly via the client,
    # we just return a 200 OK response with the service key.
    # Note: this is not recommended for production as it exposes the API key.
    if params.bot_profile == "voice-to-voice":
        return JSONResponse({"success": True})

    if not params.conversation_id:
        logger.error("No conversation ID passed to connect")
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Missing conversation_id in params",
        )

    logger.debug(f"Starting voice bot for conversation {params.conversation_id}")

    # Check that the conversation exists before proceeding
    conversation = await Conversation.get_conversation_by_id(params.conversation_id, db)
    if conversation is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Conversation {params.conversation_id} not found",
        )

    # Check that we have a valid daily API key
    transport_api_key = SERVICE_API_KEYS["daily"]

    if not transport_api_key:
        logger.error("Missing API key for transport service")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Missing API key for transport service",
        )

    room, user_token, bot_token = await bot_create(transport_api_key)

    bot_launch(params, config, room.url, bot_token)

    return JSONResponse(
        {
            "room_name": room.name,
            "room_url": room.url,
            "token": user_token,
        }
    )


@router.post("/process_data")
async def process_data(
    files: UploadFile = File(...),
    text_prompt: str = Form(...),
    conversation_id: str = Form(...)
):
    try:
        logging.info("processing data")
        async with default_session_factory() as db:
            conversation = await Conversation.get_conversation_by_id(conversation_id, db)
            if conversation is None:
                raise HTTPException(
                    status_code=status.HTTP_404_NOT_FOUND,
                    detail=f"Conversation {conversation_id} not found",
                )
            messages = [msg.content for msg in conversation.messages]

        # Save the uploaded file temporarily
        os.makedirs("temp", exist_ok=True)
        file_path = f"temp/{files.filename}"
        
        with open(file_path, "wb") as f:
            f.write(await files.read())
        file_ref = client.files.upload(file=file_path)
        logging.info(f'{file_ref=}')
        response = client.models.generate_content(model="gemini-2.0-flash-exp", contents=[text_prompt, file_ref])
        logging.info(response.text)

        return {"output": response.text}

    except Exception as e:
        logging.error(f"Error processing data: {str(e)}")
        return {"error": str(e)}
