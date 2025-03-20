import { ConversationModel, getConversations } from "@/lib/conversations";
import {
  InfiniteData,
  useInfiniteQuery,
  useQueryClient,
} from "@tanstack/react-query";

interface Props {
  searchQuery?: string;
}

export const useConversations = ({ searchQuery = "" }: Props = {}) => {
  const { data, ...query } = useInfiniteQuery<
    ConversationModel[],
    Error,
    InfiniteData<ConversationModel[], number>
  >({
    queryKey: ["conversations", searchQuery],
    initialData: {
      pages: [],
      pageParams: [],
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage = [], _allPages, lastPageParam) => {
      if (lastPage.length < 20) return undefined;
      return (lastPageParam as number) + 1;
    },
    queryFn: async ({ pageParam }) => {
      return await getConversations({
        page: pageParam as number,
        searchQuery,
      });
    },
  });
  const queryClient = useQueryClient();
  const invalidate = () =>
    queryClient.invalidateQueries({
      queryKey: ["conversations"],
    });
  const conversations = data.pages.reduce((arr, page) => [...arr, ...page], []);
  return {
    conversations,
    ...query,
    invalidate,
  };
};
