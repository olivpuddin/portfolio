import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100vh - 5rem);

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.body};
  background-color: ${({ theme }) => theme.background};
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
`;

export const Me = styled.img``;
