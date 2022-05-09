import styled from "styled-components";

export const Backs = styled.div`
  background-image: url(${({ theme }) => theme.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;

  background-color: ${({ theme }) => theme.background};
`;
