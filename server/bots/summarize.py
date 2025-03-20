from typing import Dict, List, Optional

from common.config import SERVICE_API_KEYS
from common.models import Conversation
from loguru import logger
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from pipecat.frames.frames import EndFrame
from pipecat.pipeline.pipeline import Pipeline
from pipecat.pipeline.runner import PipelineRunner
from pipecat.pipeline.task import PipelineTask
from pipecat.processors.aggregators.openai_llm_context import OpenAILLMContextFrame
from pipecat.services.ai_services import OpenAILLMContext
from pipecat.services.google import GoogleLLMContext, GoogleLLMService


async def generate_summary_with_llm(messages: List[Dict[str, str]]) -> Optional[str]:
    """
    Generate summary using the LLM service with message validation

    Args:
        messages: List of message dictionaries with 'role' and 'content'
        llm: Initialized LLM service instance

    Returns:
        Optional[str]: Generated summary or None if generation fails

    Raises:
        ValueError: If LLM response is empty or invalid
    """
    llm_api_key = SERVICE_API_KEYS["gemini"]

    if llm_api_key is None:
        return None

    llm = GoogleLLMService(
        api_key=str(SERVICE_API_KEYS["gemini"]),
        model="gemini-2.0-flash-exp",
    )

    try:
        messages.append(
            {
                "role": "user",
                "content": "Summarize our conversation into just a few words. It will be used as a label for this conversation. Avoid using any special characters.",
            }
        )

        ctx = OpenAILLMContext(messages)

        sys_ctx_aggregator = llm.create_context_aggregator(
            ctx, assistant_expect_stripped_words=False
        )
        ctx_frame = OpenAILLMContextFrame(ctx)
        if isinstance(llm, GoogleLLMService):
            GoogleLLMContext.upgrade_to_google(ctx)

        pipeline = Pipeline([llm, sys_ctx_aggregator.assistant()])
        runner = PipelineRunner(handle_sigint=False)
        task = PipelineTask(pipeline)

        await task.queue_frames([ctx_frame, EndFrame()])
        await runner.run(task)

        # Validate LLM response
        response_messages = ctx.get_messages_for_persistent_storage()
        if not response_messages:
            raise ValueError("No response received from LLM")

        if len(response_messages) == 0:
            raise ValueError("Empty response from LLM")

        summary = response_messages[-1].get("content")
        summary = summary[0].get("text")

        if not summary:
            raise ValueError("No content in LLM response")

        # Optionally validate summary content
        summary = summary.strip()
        if len(summary) == 0:
            raise ValueError("Empty summary content from LLM")

        logger.info(f"Generated summary: {summary}")
        return summary

    except ValueError as ve:
        # Log specific validation errors
        logger.error(f"Validation error in LLM response: {str(ve)}")
        return None
    except Exception as e:
        # Log unexpected errors
        logger.exception(f"Failed to generate summary: {str(e)}")
        return None


async def update_conversation_title(db: AsyncSession, conversation_id: str, new_title: str) -> bool:
    """
    Update the conversation title in the database
    """
    try:
        result = await db.execute(
            select(Conversation).where(Conversation.conversation_id == conversation_id)
        )
        conversation = result.scalars().first()

        if not conversation:
            logger.error(f"Conversation {conversation_id} not found during title update")
            return False

        conversation.title = new_title
        await db.commit()
        await db.refresh(conversation)

        logger.info(f"Successfully updated conversation title to: {new_title}")
        return True

    except Exception as e:
        logger.exception(f"Failed to update conversation title: {str(e)}")
        return False


async def generate_conversation_summary(conversation_id: str, db) -> Optional[Conversation]:
    """
    Background task to process conversation summary with comprehensive error handling
    """
    logger.info(f"Starting summary generation for conversation {conversation_id}")

    try:
        # Get conversation and validate
        conversation = await Conversation.get_conversation_by_id(conversation_id, db)
        if not conversation:
            logger.error(f"Conversation {conversation_id} not found")
            return

        messages = [getattr(msg, "content") for msg in conversation.messages]
        if not messages:
            logger.info(f"No messages found in conversation {conversation_id}")
            return

        logger.info(f"Processing {len(messages)} messages")

        # Generate summary
        summary = await generate_summary_with_llm(messages)
        if not summary:
            logger.error("Failed to generate summary")
            return

        # Update conversation title
        success = await update_conversation_title(db, conversation_id, summary)
        if not success:
            logger.error("Failed to update conversation title")
            return

        logger.info(f"Successfully completed summary generation for conversation {conversation_id}")

    except Exception as e:
        logger.exception(f"Unexpected error in summary generation: {str(e)}")
        raise e
    finally:
        logger.info(f"Finished processing conversation {conversation_id}")

    return conversation
