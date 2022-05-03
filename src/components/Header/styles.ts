import styled from "styled-components";

export const Container = styled.div`
  height: 5rem;
  border-bottom: 1px solid var(--primary-light);
`;

export const Content = styled.div`
  max-width: 1120px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
`;

export const Menu = styled.nav`
  height: 5rem;

  a {
    display: inline-block;
    position: relative;
    padding: 0 0.5rem;
    height: 5rem;
    line-height: 5rem;
    text-decoration: none;
    color: var(--primary-light);

    transition: color 0.8s;

    & + a {
      margin-left: 1.5rem;
    }

    &:hover {
      color: var(--primary-light);
      filter: brightness(0.9);
    }

    &.activer {
      font-weight: bold;
    }

    &.active::after {
      content: ""; // In this property of CSS, it is recommended that you insert a 'content', even if you don't use it!
      height: 3px;
      border-radius: 3px 3px 0 0; // top left, top right, bottom right and bottom left.
      width: 100%;
      position: absolute;
      bottom: 1px;
      left: 0;
      background: var(
        --dark
      ); // teste, aqui foi feita a border embaixo do name.
    }
  }
`;

export const Icons = styled.div`
  color: var(--primary-light);
  margin-left: auto;

  
`;
