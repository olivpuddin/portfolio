import React, { ReactNode } from "react";

import { Backs } from './styles'

interface Props {
  children: ReactNode;
}

export const Background = ({ children }: Props) => {
  return <Backs>{children}</Backs>;
};
