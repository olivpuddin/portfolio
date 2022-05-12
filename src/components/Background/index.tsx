import React, { ReactNode } from "react";

import { Backs, Container } from "./styles";

interface Props {
  children: ReactNode;
}

export const Background = ({ children }: Props) => {
  return (
    <Container>
      <Backs>{children}</Backs>
    </Container>
  );
};
