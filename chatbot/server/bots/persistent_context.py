import asyncio
from typing import Any, Callable, Coroutine, List, Optional

from loguru import logger
from pydantic import BaseModel

from pipecat.frames.frames import EndFrame, Frame, TransportMessageUrgentFrame
from pipecat.processors.frame_processor import FrameDirection, FrameProcessor
from pipecat.services.openai import OpenAILLMContext, OpenAILLMContextFrame


class RTVIItemStoredMessageData(BaseModel):
    # action: Literal["append", "replace"]
    items: List[Any]


class RTVIItemStoredMessage(BaseModel):
    label: str = "rtvi-ai"
    type: str = "storage-item-stored"
    id: str
    data: RTVIItemStoredMessageData


class PersistentContextProcessor(FrameProcessor):
    def __init__(
        self,
        storage: "PersistentContext",
        *,
        push_transport_message_upstream: bool = False,
    ):
        super().__init__()

        self._storage = storage
        self._push_transport_message_direction = (
            FrameDirection.UPSTREAM
            if push_transport_message_upstream
            else FrameDirection.DOWNSTREAM
        )

        self._register_event_handler("endframe")

    async def process_frame(self, frame: Frame, direction: FrameDirection):
        await super().process_frame(frame, direction)

        if isinstance(frame, OpenAILLMContextFrame):
            id, items = await self._storage.save(frame.context)
            if items is not None:
                await self._push_transport_save_message(id, items)
        elif isinstance(frame, EndFrame):
            await self._call_event_handler("endframe")

        await self.push_frame(frame, direction)

    async def _push_transport_save_message(self, id, items):
        message = RTVIItemStoredMessage(
            id=id,
            data=RTVIItemStoredMessageData(items=items),
        )
        frame = TransportMessageUrgentFrame(message=message.model_dump(exclude_none=True))
        await self.push_frame(frame, self._push_transport_message_direction)


class PersistentContext:
    def __init__(self, *, context: OpenAILLMContext):
        self._context_handler: Optional[Callable[[List[Any]], Coroutine[Any, Any, None]]] = None

        self._messages_count = len(context.get_messages_for_persistent_storage())
        self._queue = asyncio.Queue()
        self._worker_task = asyncio.create_task(self._worker())
        self._running = True

    def create_processor(
        self, *, exit_on_endframe: bool = False, push_transport_message_upstream: bool = False
    ):
        fp = PersistentContextProcessor(
            self, push_transport_message_upstream=push_transport_message_upstream
        )
        if exit_on_endframe:
            fp.add_event_handler("endframe", self.close)
        return fp

    def on_context_message(self, func: Callable[[list[Any]], Coroutine[Any, Any, None]]):
        if self._context_handler is not None:
            raise RuntimeError("on_context_message handler has already been registered")

        self._context_handler = func
        return func

    async def save(self, context: OpenAILLMContext) -> tuple[str, Optional[List[Any]]]:
        if not self._running:
            return ("0", None)

        messages = context.get_messages_for_persistent_storage()

        # Currently we only support storing appended messages. If the context changes out from
        # under us in any way other than new messages being appended, behavior is undefined.
        if len(messages) <= self._messages_count:
            return ("", None)

        items = messages[self._messages_count :]

        await self._queue.put(items)
        self._messages_count = len(messages)

        return (str(self._messages_count), items)

    async def _worker(self):
        if self._context_handler is None:
            logger.error("on_context_message handler not defined for PersistentContext")
            await self.close()
            raise RuntimeError("No on_context_message handler defined")

        while self._running:
            try:
                messages = await self._queue.get()
                try:
                    await self._context_handler(messages)
                except Exception as e:
                    logger.error(f"Persist operation failed: {e}")
                finally:
                    self._queue.task_done()
            except asyncio.CancelledError:
                break
            except Exception as e:
                logger.error(f"Unexpected error in worker: {e}")

    async def close(self, processor=None):
        logger.debug("Closing PersistentContext...")
        self._running = False
        await self._queue.join()
        self._worker_task.cancel()
        try:
            await self._worker_task
        except asyncio.CancelledError:
            pass
