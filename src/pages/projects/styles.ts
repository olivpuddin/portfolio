import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 5rem);

  color: ${({ theme }) => theme.body};
  background-color: ${({ theme }) => theme.background};

  overflow-x: hidden;
`;

export const Content = styled.div`
  max-width: 1120px;

  height: 100%;

  margin: 0 auto;
`;

export const Section = styled.section``;
