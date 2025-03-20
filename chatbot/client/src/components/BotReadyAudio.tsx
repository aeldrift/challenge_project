import { RTVIEvent } from "@pipecat-ai/client-js";
import { useRTVIClientEvent } from "@pipecat-ai/client-react";
import { useCallback, useRef } from "react";

interface Props {
  active?: boolean;
}

export default function BotReadyAudio({ active }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useRTVIClientEvent(
    RTVIEvent.BotReady,
    useCallback(() => {
      if (!active) return;
      audioRef.current?.play();
    }, [active]),
  );

  return (
    <audio ref={audioRef} src="/ready.mp3" playsInline className="hidden" />
  );
}
