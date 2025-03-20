import { ClientPage } from "@/components/ClientPage";
import ErrorPage from "@/components/ErrorPage";
import { Layout } from "@/components/Layout";
import QueryClientProvider from "@/components/QueryClientProvider";
import { Toaster } from "@/components/ui/toaster";
import { AppStateProvider } from "@/contexts/AppStateProvider";
import { LoaderCircleIcon } from "lucide-react";
import { useEffect, useState } from "react";

function App() {
  const [webrtcEnabled, setWebrtcEnabled] = useState<boolean>();
  const [geminiApiKey, setGeminiApiKey] = useState<string>("");

  useEffect(() => {
    const abort = new AbortController();
    fetch(`${import.meta.env.VITE_SERVER_URL}/`, {
      signal: abort.signal,
    })
      .then((response) => response.json())
      .then((json) => {
        setWebrtcEnabled(json?.["webrtc-enabled"] ?? false);
        setGeminiApiKey(json?.["gemini-api-key"] ?? "");
      })
      .catch(() => {
        setWebrtcEnabled(false);
        setGeminiApiKey("");
      });
    return () => abort.abort();
  }, []);

  if (webrtcEnabled === undefined) {
    return (
      <Layout>
        <div className="h-full flex items-center justify-center">
          <LoaderCircleIcon className="animate-spin" />
        </div>
      </Layout>
    );
  }

  if (!webrtcEnabled) {
    return (
      <ErrorPage title="Missing configuration">
        The server is missing both <code>GEMINI_API_KEY</code> and{" "}
        <code>DAILY_API_KEY</code>.
      </ErrorPage>
    );
  }

  return (
    <QueryClientProvider>
      <AppStateProvider
        geminiApiKey={geminiApiKey}
        webrtcEnabled={webrtcEnabled ?? false}
      >
        <Layout>
          <ClientPage />
          <Toaster />
        </Layout>
      </AppStateProvider>
    </QueryClientProvider>
  );
}

export default App;
