import {
  QueryClient,
  QueryClientProvider as TanStackQueryProvider,
} from "@tanstack/react-query";

export const queryClient = new QueryClient();

type Props = React.PropsWithChildren;

export default function QueryClientProvider({ children }: Props) {
  return (
    <TanStackQueryProvider client={queryClient}>
      {children}
    </TanStackQueryProvider>
  );
}
