import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
`;

export const Content = styled.div`
  max-width: 1120px;
  height: calc(100vh - 5rem);

  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${({ theme }) => theme.body};
`;

export const Section = styled.section`
  max-width: 600px;
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
`;

export const Subtitle = styled.h5`
  font-size: 2rem;
  font-weight: 400;
`;

export const About = styled.p`
  font-size: 1.2rem;
  margin-top: 5rem;
`;

export const Me = styled.img``;
