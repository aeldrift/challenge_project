import asyncio
import os

from typing import Awaitable, Callable

from pipecat.frames.frames import EndFrame, StartInterruptionFrame
from pipecat.pipeline.task import PipelineTask
from pipecat.pipeline.runner import PipelineRunner

from bots.types import BotCallbacks

from loguru import logger


DEFAULT_MAX_PARTICIPANT_JOIN_SECONDS = 20


class BotPipelineRunner:
    def __init__(self):
        self._participant_joined = False
        self._callbacks = BotCallbacks(
            on_first_participant_joined=self._on_first_participant_joined,
            on_participant_joined=self._on_participant_joined,
            on_participant_left=self._on_participant_left,
            on_call_state_updated=self._on_call_state_updated,
        )
        self._task = None

    async def start(
        self, create_task: Callable[[BotCallbacks], Awaitable[PipelineTask]], handle_sigint=True
    ):
        self._task = await create_task(self._callbacks)

        runner = PipelineRunner(handle_sigint=handle_sigint)

        pipeline_task = asyncio.create_task(runner.run(self._task))
        timeout_task = asyncio.create_task(self._participant_join_timeout())

        await asyncio.wait({pipeline_task, timeout_task}, return_when=asyncio.FIRST_COMPLETED)

        # If the timeout task is done, wait for the pipeline to finish.
        if timeout_task.done():
            await pipeline_task

        # If the pipeline task is finished, cancel the timeout task.
        if pipeline_task.done():
            timeout_task.cancel()
            await timeout_task

    #
    # Daily callbacks
    #

    async def _on_first_participant_joined(self, participant):
        self._participant_joined = True

    async def _on_participant_joined(self, participant):
        logger.info("Participant joined.")

    async def _on_participant_left(self, participant, reason):
        logger.info(f"Participant left because {reason}. Exiting.")
        if self._task:
            await self._task.queue_frame(EndFrame())

    async def _on_call_state_updated(self, state):
        if state == "left":
            logger.info("It seems we are leaving the call. Exiting.")
            if self._task:
                await self._task.queue_frame(EndFrame())

    #
    # Timeout task
    #

    async def _participant_join_timeout(self):
        try:
            seconds = int(
                os.getenv("MAX_PARTICIPANT_JOIN_SECONDS", DEFAULT_MAX_PARTICIPANT_JOIN_SECONDS)
            )
            await asyncio.sleep(seconds)
            if not self._participant_joined:
                logger.warning("No participant has joined. Exiting.")
                if self._task:
                    await self._task.queue_frames([StartInterruptionFrame(), EndFrame()])
        except asyncio.CancelledError:
            pass
