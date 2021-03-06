// React
import { useEffect, useState } from "react";

// Next
import type { AppProps } from "next/app";

// hooks
import { DarkModeProvider } from "../hooks/useTheme";
import { WidthProvider } from "../hooks/useWidth";

// Components
import { Load } from "../components/LoadScreen";

// Styles
import { GlobalStyle } from "../styles/global";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 5000);
  }, []);

  return (
    <>
      {!isLoading && <Load />}

      <DarkModeProvider>
        <WidthProvider>
          <Component {...pageProps} />
        </WidthProvider>
        <GlobalStyle />
      </DarkModeProvider>
    </>
  );
}

export default MyApp;
