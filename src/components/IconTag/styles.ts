import styled from "styled-components";

export const Tag = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Icon = styled.div`
  position: absolute;
  right: 0;
  z-index: 99;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 35px;
  height: 50px;
  font-size: 1.5rem;

  color: ${({ theme }) => theme.icon};
  background-color: #e1e1e6;
  border-end-end-radius: 10px;
  border-end-start-radius: 10px;
`;
