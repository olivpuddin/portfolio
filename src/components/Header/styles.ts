import styled from "styled-components";

export const Container = styled.div`
  height: 5rem;
  border-bottom: 1px solid var(--primary-light);
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

  color: ${({ theme }) => theme.body};

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
    filter: brightness(0.7);
  }

  /* &.activer {
    font-weight: bold;
  } */
`;

export const Icons = styled.div`
  color: ${({ theme }) => theme.body};

  width: 20%;
  display: flex;
  justify-content: space-between;

  cursor: pointer;

  /* transition: color 0.8s;

  &:hover {
    filter: brightness(0.9);
  } */
`;
