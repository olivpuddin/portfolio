import React from "react";

import GlobeSvg from "../../assets/globe.svg";

interface Props {
  onClick: () => void;
}

export const DarkMode = ({ onClick }: Props) => {
  return (
    <>
      <GlobeSvg onClick={onClick} />
    </>
  );
};
