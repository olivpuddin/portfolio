import React from "react";

import MoonSvg from "../../assets/moon.svg";

interface Props {
  onClick: () => void;
}

export const DarkModeIcon = ({ onClick }: Props) => {
  return (
    <>
      <MoonSvg onClick={onClick} />
    </>
  );
};
