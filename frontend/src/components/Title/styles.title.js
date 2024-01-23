import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
  h2 {
    width: 100px;
    font-size: 1rem;
    color: ${theme.colors.success};
    font-weight: 700;
    text-align: center;
  }

  h3 {
    width: 80px;
    font-size: 1rem;
    color: ${theme.colors.light};
    font-weight: 400;
    text-align: center;
  }
`;
