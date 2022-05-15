import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100vh - 5rem);
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.body};
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
  margin-top: 2rem;
`;

export const Branch = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
`;

export const More = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
`;
