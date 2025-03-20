import {
  AppStateContext,
  ConversationType,
  InteractionMode,
} from "@/contexts/AppStateContext";
import { useConversation } from "@/hooks/useConversation";
import { useDeferredValue, useEffect, useState } from "react";

const C = "c";
const Q = "q";

interface Props {
  geminiApiKey: string;
  webrtcEnabled: boolean;
}

export const AppStateProvider: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  geminiApiKey,
  webrtcEnabled,
}) => {
  const searchParams = new URLSearchParams(location.search);
  const cid = searchParams.get(C);
  const q = searchParams.get(Q);

  const [conversationId, setConversationId] = useState(cid ?? "");
  const [interactionMode, setInteractionMode] =
    useState<InteractionMode>("informational");
  const [conversationType, setConversationType] = useState<ConversationType>(
    cid ? "text-voice" : null,
  );

  useEffect(() => {
    setConversationType(conversationId ? "text-voice" : null);
  }, [conversationId]);

  const [searchQuery, setSearchQuery] = useState(q ?? "");
  const deferredSearchQuery = useDeferredValue(searchQuery);

  const { conversation, isFetched } = useConversation(conversationId);

  useEffect(() => {
    if (isFetched && !conversation) {
      setConversationId("");
    }
  }, [conversation, isFetched]);

  useEffect(() => {
    const searchParams = new URLSearchParams();
    if (conversationId) searchParams.append(C, conversationId);
    if (searchQuery) searchParams.append(Q, searchQuery);
    history.replaceState(null, "", `/?${searchParams.toString()}`);
  }, [conversationId, searchQuery]);

  return (
    <AppStateContext.Provider
      value={{
        conversationId,
        setConversationId,
        conversationType,
        setConversationType,
        interactionMode,
        setInteractionMode,
        searchQuery: deferredSearchQuery,
        setSearchQuery,
        geminiApiKey,
        webrtcEnabled,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
