// Next
import type { AppProps } from "next/app";

// hooks
import { DarkModeProvider } from "../hooks/useTheme";

// Styles
import { GlobalStyle } from "../styles/global";

import "bootstrap/dist/css/bootstrap.min.css";
import { WidthProvider } from "../hooks/useWidth";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <WidthProvider>
        <Component {...pageProps} />
      </WidthProvider>
      <GlobalStyle />
    </DarkModeProvider>
  );
}

export default MyApp;
