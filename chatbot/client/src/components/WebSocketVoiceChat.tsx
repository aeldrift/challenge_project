import BotReadyAudio from "@/components/BotReadyAudio";
import { VoiceIndicator } from "@/components/VoiceIndicator";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { RTVIEvent } from "@pipecat-ai/client-js";
import {
  useRTVIClient,
  useRTVIClientEvent,
  useRTVIClientTransportState,
} from "@pipecat-ai/client-react";
import { MicIcon, MicOffIcon, XIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export const WebSocketVoiceChat: React.FC = () => {
  const [botSpeaking, setBotSpeaking] = useState(false);
  const [localAudioLevel, setLocalAudioLevel] = useState(0);
  const [muted, setMuted] = useState(false);

  const rtviClient = useRTVIClient();

  const state = useRTVIClientTransportState();

  useEffect(() => {
    if (!rtviClient) return;
    rtviClient.initDevices().then(() => rtviClient.connect());
  }, [rtviClient]);

  useRTVIClientEvent(
    RTVIEvent.LocalAudioLevel,
    useCallback((level: number) => {
      setLocalAudioLevel(level);
    }, []),
  );
  useRTVIClientEvent(
    RTVIEvent.BotStartedSpeaking,
    useCallback(() => {
      setBotSpeaking(true);
    }, []),
  );
  useRTVIClientEvent(
    RTVIEvent.BotStoppedSpeaking,
    useCallback(() => {
      setBotSpeaking(false);
    }, []),
  );
  useEffect(() => {
    if (!rtviClient) return;
    rtviClient.enableMic(!muted);
  }, [muted, rtviClient]);

  const handleDisconnect = () => {
    rtviClient?.disconnect();
    setTimeout(() => window.location.reload(), 500);
  };

  const speakingOutline = !muted
    ? `${Math.ceil(32 * localAudioLevel)}px`
    : undefined;

  const isConnected = state === "connected" || state === "ready";
  const isError = state === "error";
  const isDisconnected =
    state === "disconnected" ||
    state === "disconnecting" ||
    state === "initialized";
  const isConnecting = !isConnected && !isError && !isDisconnected;

  return (
    <div className="flex-grow flex flex-col gap-20 sm:gap-28 items-center justify-center">
      <BotReadyAudio active={isConnecting || isConnected} />
      <VoiceIndicator
        animate
        status={
          isConnecting
            ? "connecting"
            : botSpeaking
              ? "speaking"
              : isDisconnected
                ? "disconnected"
                : "idle"
        }
      />
      <div className="flex flex-col gap-8 items-center justify-center">
        <span>
          {isDisconnected
            ? " "
            : isConnecting
              ? "Connecting…"
              : isConnected
                ? "Connected"
                : "Error"}
        </span>
        <div className="flex items-center gap-8">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className={cn(
                    "rounded-full p-4 sm:p-8 h-auto transition-all",
                    {
                      "outline outline-4": state !== "disconnected",
                      "text-destructive border-destructive outline-destructive -outline-offset-4":
                        state !== "disconnected" && muted,
                      "border-primary outline-primary/50":
                        state !== "disconnected" && !muted,
                    },
                  )}
                  style={
                    muted
                      ? {}
                      : {
                          outlineWidth: speakingOutline,
                          outlineOffset: `-${speakingOutline}`,
                        }
                  }
                  disabled={state === "disconnected"}
                  onClick={() => setMuted((m) => !m)}
                  variant="secondary-outline"
                >
                  {muted ? (
                    <MicOffIcon className="h-10 w-10 sm:h-16 sm:w-16" />
                  ) : (
                    <MicIcon className="h-10 w-10 sm:h-16 sm:w-16" />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-secondary text-secondary-foreground">
                {muted ? "Unmute microphone" : "Mute microphone"}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="rounded-full p-4 h-auto"
                  onClick={handleDisconnect}
                  variant="secondary-outline"
                >
                  <XIcon size={32} />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-secondary text-secondary-foreground">
                End voice to voice chat
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};
