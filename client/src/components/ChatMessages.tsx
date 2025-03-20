import AutoScrollToBottom from "@/components/AutoScrollToBottom";
import ChatMessage from "@/components/ChatMessage";
import LiveMessages from "@/components/LiveMessages";
import { useAppState } from "@/hooks/useAppState";
import { Message, normalizeMessageText } from "@/lib/messages";
import { RTVIEvent } from "@pipecat-ai/client-js";
import { useRTVIClientEvent } from "@pipecat-ai/client-react";
import { useCallback, useState } from "react";

interface Props {
  autoscroll?: boolean;
  messages: Message[];
}

export default function ChatMessages({ autoscroll = true, messages }: Props) {
  const { conversationId } = useAppState();
  const [isBotSpeaking, setIsBotSpeaking] = useState(false);

  useRTVIClientEvent(
    RTVIEvent.BotStartedSpeaking,
    useCallback(() => {
      setIsBotSpeaking(true);
    }, []),
  );
  useRTVIClientEvent(
    RTVIEvent.BotStoppedSpeaking,
    useCallback(() => {
      setIsBotSpeaking(false);
    }, []),
  );
  useRTVIClientEvent(
    RTVIEvent.Disconnected,
    useCallback(() => {
      setIsBotSpeaking(false);
    }, []),
  );

  return (
    <div className="flex flex-col gap-4">
      {messages
        .filter((m) => m.content.role !== "system")
        .filter((m) => normalizeMessageText(m).trim() !== "")
        .map((message, index) => (
          <ChatMessage
            key={index}
            isSpeaking={
              message.content.role === "assistant" &&
              index === messages.length - 1 &&
              isBotSpeaking
            }
            message={message}
          />
        ))}
      <LiveMessages
        autoscroll={autoscroll}
        conversationId={conversationId}
        isBotSpeaking={isBotSpeaking}
        messages={messages}
      />
      <AutoScrollToBottom />
    </div>
  );
}
