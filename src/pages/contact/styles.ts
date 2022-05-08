import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100vh - 5rem);

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.body};
  background-color: ${({ theme }) => theme.background};

  span :last-child {
    color: ${({ theme }) => theme.text_light};
  }
`;

export const Title = styled.span`
  font-size: 4rem;
  font-weight: bold;
`;

export const Button = styled.button`
  width: 300px;
  height: 5rem;

  border: 0;
  border-radius: 2rem;

  color: ${({ theme }) => theme.button_text};
  background-color: ${({ theme }) => theme.button};

  font-size: 1.25rem;
  font-weight: bold;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const More = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 210px;

  margin: 1rem 1.2rem;
`;

export const Email = styled.span``;

export const Me = styled.img``;
