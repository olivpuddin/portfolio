import styled from "styled-components";

export const Tag = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Icon = styled.div`
  position: absolute;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 35px;
  height: 50px;

  background-color: ${({ theme }) => theme.hover};
  border-end-end-radius: 10px;
  border-end-start-radius: 10px;
`;
