import { ImageContent, TextContent } from "@/lib/messages";
import { EventEmitter } from "events";

interface EventMap {
  changeLlmModel: [llmModel: string];
  deleteConversation: [conversationId: string];
  showChatMessages: [];
  toggleSettings: [];
  toggleSidebar: [];
  updateSidebar: [];
  userTextMessage: [text: Array<TextContent | ImageContent>];
  botTextMessage: [text: Array<TextContent>];
}

const emitter = new EventEmitter<EventMap>();

// Optional: Set the maximum number of listeners to avoid potential memory leaks in large apps.
emitter.setMaxListeners(10);

export default emitter;
