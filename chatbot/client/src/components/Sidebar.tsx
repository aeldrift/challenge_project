import { ConversationList } from "@/components/ConversationList";
import { PageTransitionLink } from "@/components/PageTransitionLink";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import { useAppState } from "@/hooks/useAppState";
import { useConversations } from "@/hooks/useConversations";
import emitter from "@/lib/eventEmitter";
import { cn } from "@/lib/utils";
import { EditIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const { conversationType } = useAppState();

  const { invalidate } = useConversations();

  useEffect(() => {
    const toggleSidebar = () => setIsOpen((prev) => !prev);
    const updateSidebar = () => invalidate();
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    emitter.on("toggleSidebar", toggleSidebar);
    emitter.on("updateSidebar", updateSidebar);
    window.addEventListener("resize", handleResize);
    return () => {
      emitter.off("toggleSidebar", toggleSidebar);
      emitter.off("updateSidebar", updateSidebar);
      window.removeEventListener("resize", handleResize);
    };
  }, [invalidate]);

  const handleClick = useCallback(() => setIsOpen(false), []);

  const content = (
    <>
      <div className="flex flex-col gap-1">
        <PageTransitionLink
          disabled={conversationType !== "text-voice"}
          href=""
          className={cn(
            "flex items-center justify-center gap-3 px-3 py-2 md:py-3 rounded-full bg-transparent border border-input transition-colors text-base font-semibold",
            {
              "hover:bg-secondary-foreground/[.05] focus-visible:bg-secondary-foreground/[.05] focus-visible:outline-primary":
                !!conversationType,
              "opacity-50": !conversationType,
            }
          )}
          onClick={() => setIsOpen(false)}
        >
          <EditIcon size={24} />
          New conversation
        </PageTransitionLink>
      </div>

      {/* <Input
        className="bg-background shadow-none border-none"
        disabled={conversationType === "voice-to-voice"}
        type="search"
        placeholder="Search conversations…"
        value={searchQuery}
        onChange={(ev) => setSearchQuery(ev.target.value)}
      /> */}
      <Separator />

      <ConversationList onClick={handleClick} />
    </>
  );

  return (
    <>
      {/* Mobile Sidebar using Sheet component */}
      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent side="left" className="overflow-y-auto">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <SheetDescription className="absolute"></SheetDescription>
            <div className="flex flex-col gap-6 p-4 pt-12 min-h-full">
              {content}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <div
        className={cn(
          "hidden lg:block lg:w-[var(--sidebar-width)] bg-secondary sticky top-0 overflow-y-auto h-dvh",
          {
            "lg:w-0 overflow-hidden": conversationType === "voice-to-voice",
          }
        )}
      >
        <div className="flex flex-col gap-6 p-4 pt-5 h-dvh">{content}</div>
      </div>
    </>
  );
}
