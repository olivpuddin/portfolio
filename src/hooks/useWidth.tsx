// React
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface WidthProviderProps {
  children: ReactNode;
}

interface WidthProps {
  width: number;
}

const WidthContext = createContext<WidthProps>({} as WidthProps);

export function WidthProvider({ children }: WidthProviderProps) {
  const [width, setWidth] = useState(0);

  const handleResize = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize, width]);

  return (
    <WidthContext.Provider
      value={{
        width,
      }}
    >
      {children}
    </WidthContext.Provider>
  );
}

export function useWidth() {
  const context = useContext(WidthContext);

  return context;
}
