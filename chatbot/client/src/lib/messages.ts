import { LLMMessageRole } from "@/lib/llm";

export interface TextContent {
  type: "text";
  text: string;
}

export interface ImageContent {
  type: "image_url";
  image_url: {
    url: string;
  };
}

export interface Message {
  created_at: string;
  content: {
    role: LLMMessageRole;
    content: string | Array<TextContent | ImageContent>;
  };
  conversation_id: string;
  extra_metadata: Record<string, unknown> | null;
  message_id: string;
  message_number: number;
  updated_at: string;
}

export const addNewLinesBeforeCodeblocks = (markdown: string) =>
  markdown.match(/([^\n])(\n```)/)
    ? markdown.replace(/([^\n])(\n```)/g, "$1\n$2")
    : markdown;

export function normalizeMessageText(message: Message) {
  return addNewLinesBeforeCodeblocks(
    Array.isArray(message.content.content)
      ? message.content.content
          .filter((tc) => tc.type === "text")
          .map((tc) => {
            if (tc.type === "text") return tc.text;
            return "";
          })
          .join(" ")
      : typeof message.content.content === "string"
      ? message.content.content
      : "",
  );
}

export function extractMessageImages(message: Message) {
  return Array.isArray(message.content.content)
    ? message.content.content
        .filter((t) => t.type === "image_url")
        .map((t) => t.image_url.url)
    : [];
}
