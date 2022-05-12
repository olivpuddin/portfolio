import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.background};
`;
export const Backs = styled.div`
  background-image: url(${({ theme }) => theme.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
`;
