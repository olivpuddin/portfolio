// React
import React from "react";
import { useWidth } from "../../hooks/useWidth";

// Header's components
import { HeaderDefault } from "./HeaderDefault";
import { HeaderDrop } from "./HeaderDrop/indext";

export const Header = () => {
  const { width } = useWidth();

  return <>{width <= 500 ? <HeaderDrop /> : <HeaderDefault />}</>;
};
