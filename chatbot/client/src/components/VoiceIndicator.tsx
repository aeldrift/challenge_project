import Logo from "@/components/svg/Logo";
import { cn } from "@/lib/utils";
import { Participant } from "@pipecat-ai/client-js";
import { useRTVIClient } from "@pipecat-ai/client-react";
import { useEffect, useState } from "react";

type Status = "disconnected" | "connecting" | "idle" | "speaking";

interface Props {
  animate?: boolean;
  className?: string;
  size?: number;
  status?: Status;
}

const bubbleClassName =
  "rounded-full aspect-square absolute -translate-x-1/2 -translate-y-1/2 transition-all";
const speakingClassName = "min-h-[11%] w-[11%] top-[50%] bg-muted";

export const VoiceIndicator: React.FC<Props> = ({
  animate = false,
  className,
  size = 288,
  status = "idle",
}) => {
  const [botAudioLevel, setBotAudioLevel] = useState(0);

  const rtviClient = useRTVIClient();

  const isSpeaking = status === "speaking";
  const isConnected = status === "idle" || isSpeaking;

  const speakingHeight = isSpeaking
    ? `${Math.ceil(100 * botAudioLevel)}%`
    : undefined;

  useEffect(() => {
    if (!rtviClient || !isSpeaking) return;
    const handleLevel = (level: number, p: Participant) => {
      if (p.local) return;
      setBotAudioLevel((prevLevel) =>
        level >= prevLevel ? level : prevLevel * 0.5
      );
    };
    rtviClient.addListener("remoteAudioLevel", handleLevel);
    return () => {
      rtviClient.removeListener("remoteAudioLevel", handleLevel);
    };
  }, [isSpeaking, rtviClient]);

  const indicatorClassName = cn(bubbleClassName, speakingClassName, {
    "opacity-50": !isSpeaking,
    "top-full translate-y-0": !isConnected,
  });

  return (
    <div
      className={cn(
        "aspect-square rounded-full shadow-xl border border-input relative overflow-hidden",
        className
      )}
      style={{
        height: size,
        width: size,
      }}
    >
      {animate ? (
        <>
          <div
            className={cn(
              bubbleClassName,
              "bg-muted/40 h-full w-full animate-pulse top-1/2 left-1/2",
              {
                "scale-0": status !== "connecting",
              }
            )}
          />
          <div
            className={cn(indicatorClassName, "max-h-[40%] left-[20%]")}
            style={{ height: speakingHeight }}
          />
          <div
            className={cn(indicatorClassName, "max-h-[50%] left-[40%]")}
            style={{ height: speakingHeight }}
          />
          <div
            className={cn(indicatorClassName, "max-h-[30%] left-[60%]")}
            style={{ height: speakingHeight }}
          />
          <div
            className={cn(indicatorClassName, "max-h-[20%] left-[80%]")}
            style={{ height: speakingHeight }}
          />
        </>
      ) : (
        <Logo className="absolute text-primary h-[55%] w-[55%] left-[22%] top-[22%] rotate-12" />
      )}
    </div>
  );
};
