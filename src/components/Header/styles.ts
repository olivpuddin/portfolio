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

export const Menu = styled.nav`
  height: 5rem;
`;

export const Link = styled.a`
  cursor: pointer;

  color: ${({ theme }) => theme.header};

  display: inline-block;
  position: relative;
  padding: 0 0.5rem;
  height: 5rem;
  line-height: 5rem;
  text-decoration: none;

  font-weight: bold;

  transition: filter 0.2s;

  & + a {
    margin-left: 1.5rem;
  }

  &:hover {
    color: ${({ theme }) => theme.header};
    filter: brightness(0.7);
  }
`;

export const Icons = styled.div`
  width: 20%;

  display: flex;
  justify-content: space-between;

  cursor: pointer;
`;

export const Github = styled.div`
  border-radius: 1rem;

  padding: 0.3rem;

  transition: filter 0.8s;

  :hover {
    background-color: ${({ theme }) => theme.hover};
    filter: brightness(0.9);
  }
`;

export const Linkedin = styled.div`
  border-radius: 1rem;

  padding: 0.3rem;

  transition: filter 0.8s;

  :hover {
    background-color: ${({ theme }) => theme.hover};
    filter: brightness(0.9);
  }
`;

export const Darkside = styled.div`
  border-radius: 1rem;

  padding: 0.3rem;

  transition: filter 0.8s;

  :hover {
    background-color: ${({ theme }) => theme.hover};
    filter: brightness(0.9);
  }
`;
