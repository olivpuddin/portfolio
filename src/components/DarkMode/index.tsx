import React from "react";

import MoonSvg from "../../assets/moon.svg";

interface Props {
  onClick: () => void;
}

export const DarkMode = ({ onClick }: Props) => {
  return (
    <>
      <MoonSvg onClick={onClick} />
    </>
  );
};
