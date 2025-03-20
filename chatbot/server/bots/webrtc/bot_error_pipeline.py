from typing import Awaitable, Callable

from bots.types import BotCallbacks
from pipecat.frames.frames import EndFrame
from pipecat.pipeline.pipeline import Pipeline
from pipecat.pipeline.task import PipelineTask
from pipecat.processors.frameworks.rtvi import RTVIProcessor
from pipecat.transports.services.daily import DailyTransport


async def bot_error_pipeline_task(
    room_url: str, token: str, error: str
) -> Callable[[BotCallbacks], Awaitable[PipelineTask]]:
    async def create_task(callbacks: BotCallbacks) -> PipelineTask:
        transport = DailyTransport(room_url, token, "Open Sesame")

        rtvi = RTVIProcessor()
        pipeline = Pipeline(
            [
                rtvi,
                transport.output(),
            ]
        )

        task = PipelineTask(pipeline)

        @transport.event_handler("on_first_participant_joined")
        async def on_first_participant_joined(transport, participant):
            await callbacks.on_first_participant_joined(participant)
            await rtvi.send_error(error)
            await task.queue_frame(EndFrame())

        return task

    return create_task
