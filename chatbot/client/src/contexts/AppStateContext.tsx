import { createContext, Dispatch, SetStateAction } from "react";

export type InteractionMode = "conversational" | "informational";

export type ConversationType = "voice-to-voice" | "text-voice" | null;

interface AppStateContextValue {
  conversationId: string;
  setConversationId: Dispatch<SetStateAction<string>>;
  conversationType: ConversationType;
  setConversationType: Dispatch<SetStateAction<ConversationType>>;
  interactionMode: InteractionMode;
  setInteractionMode: Dispatch<SetStateAction<InteractionMode>>;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  geminiApiKey: string;
  webrtcEnabled: boolean;
}

const noop = () => {};

export const AppStateContext = createContext<AppStateContextValue>({
  conversationId: "",
  setConversationId: noop,
  conversationType: null,
  setConversationType: noop,
  interactionMode: "informational",
  setInteractionMode: noop,
  searchQuery: "",
  setSearchQuery: noop,
  geminiApiKey: "",
  webrtcEnabled: false,
});
