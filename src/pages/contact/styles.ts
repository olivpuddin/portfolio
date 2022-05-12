import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100vh - 5rem);
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.body};

  span :last-child {
    color: ${({ theme }) => theme.text_light};
  }
`;

export const Title = styled.span`
  font-size: 3rem;
  font-weight: bold;
`;

export const Subtitle = styled.span`
  display: grid;
  font-size: 3rem;
  font-weight: bold;
`;

export const Button = styled.button`
  width: 250px;
  height: 3.5rem;

  margin: 1rem 0;

  border: 0;
  border-radius: 1rem;

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

  margin: 1rem 0;
`;

export const Email = styled.span`
  margin-left: 0.5rem;
`;

export const Me = styled.img`
  margin-top: 1rem;
`;
