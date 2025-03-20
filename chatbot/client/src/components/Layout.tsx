import Navbar from "@/components/Navbar";
import QueryClientProvider from "@/components/QueryClientProvider";
import Sidebar from "@/components/Sidebar";
import { useAppState } from "@/hooks/useAppState";
import { cn } from "@/lib/utils";

export function Layout({ children }: React.PropsWithChildren) {
  const { conversationType } = useAppState();

  const isVoiceToVoice = conversationType === "voice-to-voice";

  return (
    <QueryClientProvider>
      <div
        className={cn(
          "bg-secondary lg:grid lg:gap-2 lg:grid-cols-[var(--sidebar-width)_1fr] min-h-dvh lg:transition-all",
          {
            "lg:grid-cols-[0px_1fr] lg:gap-0": isVoiceToVoice,
          },
        )}
      >
        <Sidebar />

        {/* Main content area */}
        <div
          className={cn(
            "flex flex-col h-dvh lg:h-[calc(100dvh-16px)] w-full bg-background lg:my-2 overflow-y-auto overflow-x-hidden lg:rounded-l-3xl z-10",
            {
              "lg:rounded-none lg:h-dvh lg:my-0": isVoiceToVoice,
            },
          )}
        >
          <Navbar />

          <main className="relative flex-grow mx-auto max-w-3xl w-full flex flex-col">
            {children}
          </main>
        </div>
      </div>
    </QueryClientProvider>
  );
}
