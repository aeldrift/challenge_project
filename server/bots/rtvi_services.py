from typing import List

from pipecat.audio.vad.vad_analyzer import VADParams
from pipecat.frames.frames import (
    ErrorFrame,
    LLMUpdateSettingsFrame,
    STTUpdateSettingsFrame,
    TTSUpdateSettingsFrame,
    VADParamsUpdateFrame,
)
from pipecat.processors.aggregators.llm_response import LLMUserContextAggregator
from pipecat.processors.frame_processor import FrameDirection
from pipecat.processors.frameworks.rtvi import (
    RTVIProcessor,
    RTVIService,
    RTVIServiceOption,
    RTVIServiceOptionConfig,
)


async def register_rtvi_services(rtvi: RTVIProcessor, user_aggregator: LLMUserContextAggregator):
    async def config_llm_settings_handler(
        rtvi: RTVIProcessor, service: str, option: RTVIServiceOptionConfig
    ):
        frame = LLMUpdateSettingsFrame(settings={option.name: option.value})
        await rtvi.push_frame(frame)

    async def config_llm_messages_handler(
        rtvi: RTVIProcessor, service: str, option: RTVIServiceOptionConfig
    ):
        if option.value:
            frame = LLMUpdateSettingsFrame(settings={option.name: option.value})
            await rtvi.push_frame(frame)

    async def config_llm_run_on_config_handler(
        rtvi: RTVIProcessor, service: str, option: RTVIServiceOptionConfig
    ):
        if option.value:
            # Run inference with the updated messages. Make sure to send the
            # frame from the RTVI to keep ordering.
            frame = user_aggregator.get_context_frame()
            await rtvi.push_frame(frame)

    async def config_tts_speed_handler(
        rtvi: RTVIProcessor, service: str, option: RTVIServiceOptionConfig
    ):
        speed_value = option.value
        try:
            # Try to convert to float if it's a numeric string
            speed_value = float(speed_value)
        except ValueError:
            # If conversion fails, keep it as a string
            speed_value = speed_value.strip()

        frame = TTSUpdateSettingsFrame(settings={"speed": speed_value})
        await rtvi.push_frame(frame)

    async def config_tts_emotion_handler(
        rtvi: RTVIProcessor, service: str, option: RTVIServiceOptionConfig
    ):
        emotion_value: List[str] = option.value
        if not isinstance(emotion_value, list):
            await rtvi.push_error(ErrorFrame(f"Invalid emotion value: {emotion_value}"))
            return

        frame = TTSUpdateSettingsFrame(settings={"emotion": emotion_value})
        await rtvi.push_frame(frame)

    async def config_tts_settings_handler(
        rtvi: RTVIProcessor, service: str, option: RTVIServiceOptionConfig
    ):
        frame = TTSUpdateSettingsFrame(settings={option.name: option.value})
        await rtvi.push_frame(frame)

    async def config_stt_settings_handler(
        rtvi: RTVIProcessor, service: str, option: RTVIServiceOptionConfig
    ):
        frame = STTUpdateSettingsFrame(settings={option.name: option.value})
        await rtvi.push_frame(frame)

    async def config_vad_params_handler(
        rtvi: RTVIProcessor, service: str, option: RTVIServiceOptionConfig
    ):
        try:
            extra_fields = set(option.value.keys()) - set(VADParams.model_fields.keys())
            if extra_fields:
                raise ValueError(f"Extra fields found in VAD params: {extra_fields}")
            vad_params = VADParams.model_validate(option.value, strict=True)
        except Exception as e:
            await rtvi.push_error(ErrorFrame(f"Error setting VAD params: {e}"))
            return
        frame = VADParamsUpdateFrame(vad_params)
        await rtvi.push_frame(frame, FrameDirection.UPSTREAM)

    rtvi_vad = RTVIService(
        name="vad",
        options=[
            RTVIServiceOption(name="params", type="object", handler=config_vad_params_handler),
        ],
    )

    rtvi_llm = RTVIService(
        name="llm",
        options=[
            RTVIServiceOption(name="model", type="string", handler=config_llm_settings_handler),
            RTVIServiceOption(
                name="temperature", type="number", handler=config_llm_settings_handler
            ),
            RTVIServiceOption(name="top_p", type="number", handler=config_llm_settings_handler),
            RTVIServiceOption(name="top_k", type="number", handler=config_llm_settings_handler),
            RTVIServiceOption(
                name="frequency_penalty", type="number", handler=config_llm_settings_handler
            ),
            RTVIServiceOption(
                name="presence_penalty", type="number", handler=config_llm_settings_handler
            ),
            RTVIServiceOption(
                name="max_tokens", type="number", handler=config_llm_settings_handler
            ),
            RTVIServiceOption(name="seed", type="number", handler=config_llm_settings_handler),
            RTVIServiceOption(name="extra", type="object", handler=config_llm_settings_handler),
            RTVIServiceOption(
                name="initial_messages", type="array", handler=config_llm_messages_handler
            ),
            RTVIServiceOption(
                name="run_on_config", type="bool", handler=config_llm_run_on_config_handler
            ),
        ],
    )

    rtvi_tts = RTVIService(
        name="tts",
        options=[
            RTVIServiceOption(name="model", type="string", handler=config_tts_settings_handler),
            RTVIServiceOption(name="voice", type="string", handler=config_tts_settings_handler),
            RTVIServiceOption(name="language", type="string", handler=config_tts_settings_handler),
            RTVIServiceOption(
                name="text_filter", type="object", handler=config_tts_settings_handler
            ),
            RTVIServiceOption(name="speed", type="string", handler=config_tts_speed_handler),
            RTVIServiceOption(name="emotion", type="array", handler=config_tts_emotion_handler),
            RTVIServiceOption(
                name="optimize_streaming_latency",
                type="string",
                handler=config_tts_settings_handler,
            ),
            RTVIServiceOption(name="stability", type="number", handler=config_tts_settings_handler),
            RTVIServiceOption(
                name="similarity_boost", type="number", handler=config_tts_settings_handler
            ),
            RTVIServiceOption(
                name="use_speaker_boost", type="bool", handler=config_tts_settings_handler
            ),
        ],
    )

    rtvi_stt = RTVIService(
        name="stt",
        options=[
            RTVIServiceOption(name="model", type="string", handler=config_stt_settings_handler),
            RTVIServiceOption(name="language", type="string", handler=config_stt_settings_handler),
        ],
    )

    rtvi.register_service(rtvi_vad)
    rtvi.register_service(rtvi_llm)
    rtvi.register_service(rtvi_tts)
    rtvi.register_service(rtvi_stt)
