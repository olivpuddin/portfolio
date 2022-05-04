// React
import { createContext, ReactNode, useContext, useState } from "react";

// Styles & theme
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

interface DarkModeProviderProps {
  children: ReactNode;
}

interface DarkModeProps {
  isDarkTheme: boolean;
  handleTheme: () => void;
}

const DarkModeContext = createContext<DarkModeProps>({} as DarkModeProps);

export function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  function handleTheme() {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <ThemeProvider theme={!isDarkTheme ? theme.lightTheme : theme.darkTheme}>
      <DarkModeContext.Provider
        value={{
          isDarkTheme,
          handleTheme,
        }}
      >
        {children}
      </DarkModeContext.Provider>
    </ThemeProvider>
  );
}

export function useTheme() {
  const context = useContext(DarkModeContext);

  return context;
}
