import { getConversation } from "@/lib/conversations";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useConversation = (conversationId: string) => {
  const { data: conversation, ...query } = useQuery({
    queryKey: ["conversation", conversationId],
    queryFn: async () => {
      if (!conversationId) return null;
      return await getConversation(conversationId);
    },
  });
  const queryClient = useQueryClient();
  const invalidate = () =>
    queryClient.invalidateQueries({
      queryKey: ["conversation", conversationId],
    });
  return {
    conversation,
    ...query,
    invalidate,
  };
};
