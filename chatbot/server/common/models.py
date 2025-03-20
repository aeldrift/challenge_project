import uuid
from datetime import datetime
from typing import Any, List, Optional

from loguru import logger
from pydantic import BaseModel
from sqlalchemy import (
    JSON,
    TIMESTAMP,
    Boolean,
    Column,
    ForeignKey,
    Index,
    Integer,
    String,
    func,
    select,
)
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import (
    Mapped,
    declarative_base,
    joinedload,
    mapped_column,
    relationship,
)

Base = declarative_base()


# ==========================
# SQLAlchemy Models
# ==========================


class Conversation(Base):
    __tablename__ = "conversations"
    conversation_id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    title: Mapped[Optional[str]] = mapped_column(String(255), nullable=True)
    archived = Column(Boolean, default=False)
    created_at = Column(TIMESTAMP(timezone=True), server_default=func.datetime("now"))
    updated_at = Column(
        TIMESTAMP(timezone=True),
        server_default=func.datetime("now"),
        onupdate=func.datetime("now"),
    )

    messages: Mapped[List["Message"]] = relationship("Message", back_populates="conversation")

    @classmethod
    async def get_conversation_by_id(cls, conversation_id: str, db: AsyncSession):
        result = await db.execute(
            select(Conversation)
            .options(joinedload(Conversation.messages))
            .where(Conversation.conversation_id == conversation_id)
        )
        return result.scalars().first()


class Message(Base):
    __tablename__ = "messages"

    message_id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    conversation_id = Column(
        String,
        ForeignKey("conversations.conversation_id", ondelete="CASCADE"),
        nullable=False,
    )
    message_number = Column(Integer, nullable=False, server_default=None)
    content = Column(JSON, nullable=False)
    language_code = Column(String(20), default="english")
    created_at = Column(TIMESTAMP(timezone=True), server_default=func.datetime("now"))
    updated_at = Column(
        TIMESTAMP(timezone=True),
        server_default=func.datetime("now"),
        onupdate=func.datetime("now"),
    )
    extra_metadata = Column(JSON, nullable=True)

    conversation: Mapped[Conversation] = relationship("Conversation", back_populates="messages")
    attachments: Mapped[List["Attachment"]] = relationship("Attachment", back_populates="message")

    __table_args__ = (
        Index("idx_messages_conversation_id", "conversation_id"),
        Index("idx_messages_language_code", "language_code"),
        Index(
            "idx_messages_conversation_number",
            "conversation_id",
            "message_number",
            unique=True,
        ),
    )

    @staticmethod
    async def get_max_message_number(db_session: AsyncSession, conversation_id: str):
        max_message_number_result = await db_session.execute(
            select(func.coalesce(func.max(Message.message_number), 0)).where(
                Message.conversation_id == conversation_id
            )
        )
        return max_message_number_result.scalar_one()

    @staticmethod
    async def create_message(
        db_session: AsyncSession,
        conversation_id: str,
        content: dict,
        extra_metadata: Optional[dict] = None,
    ):
        # Get the current maximum message_number for the conversation
        max_message_number = await Message.get_max_message_number(db_session, conversation_id)

        # Increment the message number
        new_message_number = max_message_number + 1

        # Create the new message
        new_message = Message(
            conversation_id=conversation_id,
            content=content,
            message_number=new_message_number,
            extra_metadata=extra_metadata,
        )

        db_session.add(new_message)
        await db_session.commit()
        await db_session.refresh(new_message)

        return new_message

    @classmethod
    async def create_messages(
        cls,
        db_session: AsyncSession,
        conversation_id: str,
        messages: List[Any],
        language_code: str = "english",
    ):
        ms = []
        # Get the current maximum message_number for the conversation (note: we increment
        # this for each message, vs querying the DB each time.)
        max_message_number = await Message.get_max_message_number(db_session, conversation_id)
        for i, message_data in enumerate(messages, start=1):
            m = Message(
                conversation_id=conversation_id,
                content=message_data,
                language_code=language_code,
                message_number=max_message_number + i,
            )
            ms.append(m)
        try:
            db_session.add_all(ms)
            await db_session.commit()
        except Exception as e:
            await db_session.rollback()
            raise e


class Attachment(Base):
    __tablename__ = "attachments"

    attachment_id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    message_id = Column(
        String,
        ForeignKey("messages.message_id", ondelete="CASCADE"),
        nullable=True,
    )
    file_data = Column(String, nullable=False)
    file_type = Column(String(50), nullable=False)
    created_at = Column(TIMESTAMP(timezone=True), server_default=func.datetime("now"))

    message: Mapped["Message"] = relationship("Message", back_populates="attachments")

    __table_args__ = (Index("idx_attachments_message_id", "message_id"),)

    @classmethod
    async def get_attachments_by_ids(cls, db_session: AsyncSession, attachment_ids: List[str]):
        logger.debug(f"Retrieving attachments: {attachment_ids}")
        result = await db_session.execute(
            select(Attachment).where(Attachment.attachment_id.in_(attachment_ids))
        )
        return result.scalars().all()


# ==========================
# Pydantic Models
# ==========================


class ConversationModel(BaseModel):
    conversation_id: uuid.UUID
    title: Optional[str] = None
    archived: Optional[bool] = False
    created_at: datetime
    updated_at: datetime

    model_config = {"from_attributes": True, "arbitrary_types_allowed": True}


class ConversationCreateModel(BaseModel):
    title: Optional[str] = None

    model_config = {
        "from_attributes": True,
    }


class ConversationUpdateModel(BaseModel):
    title: Optional[str]

    model_config = {
        "from_attributes": True,
    }


class AttachmentModel(BaseModel):
    attachment_id: uuid.UUID
    message_id: Optional[uuid.UUID] = None
    file_data: str
    file_type: str
    created_at: datetime

    model_config = {"from_attributes": True, "arbitrary_types_allowed": True}


class AttachmentUploadResponse(BaseModel):
    attachment_id: uuid.UUID
    file_type: str

    model_config = {"from_attributes": True}


class MessageCreateModel(BaseModel):
    content: dict
    extra_metadata: Optional[dict] = None

    model_config = {
        "from_attributes": True,
        "extra": "allow",
    }


class MessageModel(BaseModel):
    message_id: uuid.UUID
    conversation_id: uuid.UUID
    message_number: int
    content: dict
    language_code: Optional[str] = "english"
    created_at: datetime
    updated_at: datetime
    extra_metadata: Optional[dict] = None

    model_config = {"from_attributes": True, "arbitrary_types_allowed": True}


class MessageWithConversationModel(BaseModel):
    message: MessageModel
    conversation: ConversationModel

    model_config = {
        "from_attributes": True,
    }
