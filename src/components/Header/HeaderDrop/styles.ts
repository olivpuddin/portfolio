import styled from "styled-components";

export const Container = styled.div`
  height: 5rem;
  /* border-bottom: 1px solid ${({ theme }) => theme.header}; */

  color: ${({ theme }) => theme.header};
  background-color: ${({ theme }) => theme.background};
`;

export const Content = styled.div`
  max-width: 1120px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Menu = styled.nav``;

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Github = styled.div`
  border-radius: 1.5rem;

  padding: 0.6rem;

  transition: filter 0.8s;

  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.hover};
    filter: brightness(0.9);
  }
`;

export const Linkedin = styled.div`
  border-radius: 1.5rem;

  padding: 0.6rem;

  transition: filter 0.8s;

  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.hover};
    filter: brightness(0.9);
  }
`;

export const Darkside = styled.div`
  border-radius: 1.5rem;

  padding: 0.6rem;

  transition: filter 0.8s;

  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.hover};
    filter: brightness(0.9);
  }
`;
