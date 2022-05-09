import styled from "styled-components";

export const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;

  color: ${({ theme }) => theme.title};
`;

export const Button = styled.button`
  position: absolute;
  right: 1.5rem;
  top: -1.5rem;

  border: 0;
  background: red;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
