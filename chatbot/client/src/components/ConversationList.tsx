import ConversationListItem from "@/components/ConversationListItem";
import { Button } from "@/components/ui/button";
import { useAppState } from "@/hooks/useAppState";
import { useConversation } from "@/hooks/useConversation";
import { useConversations } from "@/hooks/useConversations";
import { ConversationModel } from "@/lib/conversations";
import { LoaderCircleIcon } from "lucide-react";
import { useEffect, useRef } from "react";

interface Props {
  onClick: () => void;
}

export const ConversationList = ({ onClick }: Props) => {
  const loadingRef = useRef<HTMLDivElement>(null);
  const { conversationId, searchQuery, setSearchQuery } = useAppState();

  const { conversation } = useConversation(conversationId);
  const { conversations, fetchNextPage, isFetched, isFetching, hasNextPage } =
    useConversations({
      searchQuery,
    });

  const showConversationOnTop =
    conversation &&
    !conversations.some((c) => c.conversation_id === conversationId);

  useEffect(() => {
    if (isFetching || !loadingRef.current) return;

    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isFetching) {
          fetchNextPage();
        }
      });
    });
    intersectionObserver.observe(loadingRef.current);
    return () => {
      intersectionObserver.disconnect();
    };
  }, [fetchNextPage, isFetching]);

  // Helper function to format conversation dates
  const formatDateGroup = (date: Date) => {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    if (isSameDay(date, today)) {
      return "Today";
    } else if (isSameDay(date, yesterday)) {
      return "Yesterday";
    } else {
      return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }).format(date);
    }
  };

  // Helper function to check if two dates are on the same day
  const isSameDay = (d1: Date, d2: Date) => {
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  };

  const groupedConversations = conversations.reduce(
    (acc: Record<string, ConversationModel[]>, conversation) => {
      const group = formatDateGroup(new Date(conversation.updated_at));
      if (!acc[group]) acc[group] = [];
      acc[group].push(conversation);
      return acc;
    },
    {}
  );

  const hasConversations = Object.keys(groupedConversations).length > 0;

  if (!isFetched) {
    return (
      <div className="flex items-center justify-center">
        <LoaderCircleIcon size={16} className="animate-spin" />
      </div>
    );
  }

  return hasConversations ? (
    <>
      {showConversationOnTop && (
        <ul>
          <ConversationListItem
            conversation={conversation as ConversationModel}
            onClick={onClick}
          />
        </ul>
      )}
      {Object.keys(groupedConversations).map((group) => (
        <div key={group}>
          {/* Group header */}
          <h3 className="text-xs font-bold mb-4 ml-3 text-neutral-500">
            {group}
          </h3>

          <ul className="space-y-1">
            {groupedConversations[group].map((conversation) => (
              <ConversationListItem
                key={conversation.conversation_id}
                conversation={conversation}
                onClick={onClick}
              />
            ))}
          </ul>
        </div>
      ))}

      {hasNextPage && (
        <div ref={loadingRef} className="flex items-center justify-center pb-2">
          <LoaderCircleIcon className="animate-spin" size={16} />
        </div>
      )}
    </>
  ) : (
    <>
      <h3 className="text-md font-bold mb-2 text-secondary-foreground">
        No conversations
      </h3>
      {searchQuery && (
        <Button onClick={() => setSearchQuery("")} variant="outline">
          Reset search query
        </Button>
      )}
    </>
  );
};
