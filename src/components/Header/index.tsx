// React
import React, { useCallback, useEffect, useState } from "react";

// Header's components
import { HeaderDefault } from "./HeaderDefault";
import { HeaderDrop } from "./HeaderDrop/indext";

export const Header = () => {
  const [width, setWidth] = useState(0);

  const handleResize = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize, width]);

  return <>{width <= 500 ? <HeaderDrop /> : <HeaderDefault />}</>;
};
