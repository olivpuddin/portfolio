import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 5rem);

  color: ${({ theme }) => theme.body};

  overflow-x: hidden;
`;

export const Content = styled.div`
  max-width: 1120px;

  height: 100%;

  margin: 0 auto;
`;

export const Section = styled.section``;

export const Mobile = styled.div``;

export const Web = styled.div``;

export const LabelMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 80px;

  margin-left: 1.2rem;
  padding-top: 1.25rem;
`;

export const LabelWeb = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 60px;

  margin-left: 1.2rem;
  padding: 0.3rem 0;
`;

export const Title = styled.span`
  font-weight: bold;
`;
