import CopyToClipboard from "@/components/CopyToClipboard";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow as theme } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props extends React.ComponentProps<typeof SyntaxHighlighter> {
  children: string;
  language?: string;
}

export default function CodeBlock({ children, language, ...props }: Props) {
  const cleanedUpChildren = String(children).replace(/\n$/, "");

  return (
    <Card className="bg-black text-white overflow-hidden">
      <CardHeader className="py-2">
        <div className="flex flex-row justify-between items-center">
          <span>{language ?? "code"}</span>
          <CopyToClipboard side="left" text={cleanedUpChildren} />
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <SyntaxHighlighter
          style={theme}
          customStyle={{
            margin: 0,
          }}
          language={language}
          PreTag="div"
          {...props}
        >
          {cleanedUpChildren}
        </SyntaxHighlighter>
      </CardContent>
    </Card>
  );
}
