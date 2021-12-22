import type { AppProps } from "next/app";
import { GraphsProvider } from "@/contexts/graphs";
import "bootswatch/dist/lumen/bootstrap.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GraphsProvider>
      <Component {...pageProps} />
    </GraphsProvider>
  );
}

export default MyApp;
