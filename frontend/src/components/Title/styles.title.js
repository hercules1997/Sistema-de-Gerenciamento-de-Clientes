import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  width: 100%;

  h2 {
    width: 20%;
    font-size: 1rem;
    color: ${theme.colors.success};
    font-weight: 700;
  }

  h3 {
    width: 80%;
    font-size: 1rem;
    color: ${theme.colors.light};
    font-weight: 400;
  }
`;
