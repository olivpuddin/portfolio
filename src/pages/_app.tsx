// Next
import type { AppProps } from "next/app";

// hooks
import { DarkModeProvider } from "../hooks/useTheme";

// Styles
import { GlobalStyle } from "../styles/global";

import 'bootstrap/dist/css/bootstrap.min.css';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </DarkModeProvider>
  );
}

export default MyApp;
