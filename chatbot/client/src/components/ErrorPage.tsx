import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface ErrorPageProps {
  children: React.ReactNode;
  title: string;
}

export default function ErrorPage({ children, title }: ErrorPageProps) {
  return (
    <div className="flex items-center justify-center h-svh max-w-lg mx-auto animate-appear">
      <Alert variant="destructive" className="shadow-long">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{children}</AlertDescription>
      </Alert>
    </div>
  );
}
