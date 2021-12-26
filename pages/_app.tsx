import type { AppProps } from "next/app";
import SSRProvider from "react-bootstrap/SSRProvider";
import { GraphsProvider } from "@/contexts/graphs";
import "bootswatch/dist/lumen/bootstrap.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GraphsProvider>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </GraphsProvider>
  );
}

export default MyApp;
