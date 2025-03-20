import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useAppState } from "@/hooks/useAppState";
import { useConversations } from "@/hooks/useConversations";
import emitter from "@/lib/eventEmitter";
import { LoaderCircleIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function DeleteConversationModal() {
  const [conversationId, setConversationId] = useState("");

  const {
    conversationId: currentConversationId,
    setConversationId: setCurrentConversationId,
  } = useAppState();
  const { conversations } = useConversations();
  const conversation = conversations.find(
    (c) => c.conversation_id === conversationId,
  );

  const { toast } = useToast();

  useEffect(() => {
    const handleDeleteConversation = (cid: string) => setConversationId(cid);
    emitter.on("deleteConversation", handleDeleteConversation);
    return () => {
      emitter.off("deleteConversation", handleDeleteConversation);
    };
  }, []);

  const [isDeleting, setIsDeleting] = useState(false);
  const handleClickDelete = async () => {
    setIsDeleting(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/conversations/${conversationId}`,
        {
          method: "DELETE",
        },
      );
      if (response.ok) {
        toast({
          title: `Conversation "${conversation?.title}" deleted!`,
        });
        if (conversationId === currentConversationId)
          setCurrentConversationId("");
        setConversationId("");
        emitter.emit("updateSidebar");
      }
    } finally {
      setIsDeleting(false);
    }
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) setConversationId("");
  };

  return (
    <Dialog open={Boolean(conversationId)} onOpenChange={handleOpenChange}>
      <DialogContent noCloseButton={isDeleting}>
        <DialogHeader>
          <DialogTitle>Delete conversation</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Do you really want to delete{" "}
          {conversation?.title ? (
            <strong>“{conversation?.title}”</strong>
          ) : (
            "the conversation"
          )}
          ?
        </DialogDescription>
        <DialogFooter>
          <DialogClose asChild>
            <Button disabled={isDeleting} variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <Button
            className="gap-2"
            disabled={isDeleting}
            onClick={handleClickDelete}
            variant="destructive"
          >
            {isDeleting && <LoaderCircleIcon className="animate-spin" />}
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
