import styled from "styled-components";

export const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;

  color: ${({ theme }) => theme.title};
`;

export const Button = styled.button`
  position: absolute;
  top: -3rem;
  right: -1px;

  border: 0;
  background-color: transparent;
  color: #e1e1e6;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
