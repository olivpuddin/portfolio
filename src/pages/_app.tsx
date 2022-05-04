// Next
import type { AppProps } from "next/app";

// hooks
import { DarkModeProvider } from "../hooks/useTheme";

// Styles
import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </DarkModeProvider>
  );
}

export default MyApp;
