import { useAppState } from "@/hooks/useAppState";
import { cn } from "@/lib/utils";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  disabled?: boolean;
  href: string;
}

export const PageTransitionLink: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  disabled = false,
  href,
  onClick,
  ...props
}) => {
  const { setConversationId, setConversationType } = useAppState();

  const handleClick = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    ev.preventDefault();
    if (disabled) return;
    setConversationId(href);
    if (!href) setConversationType(null);
    onClick?.(ev);
  };

  return (
    <a
      className={cn(className, {
        "cursor-pointer": !disabled,
        "cursor-not-allowed": disabled,
      })}
      href={`?c=${href}`}
      {...props}
      onClick={handleClick}
      tabIndex={disabled ? -1 : undefined}
    />
  );
};
