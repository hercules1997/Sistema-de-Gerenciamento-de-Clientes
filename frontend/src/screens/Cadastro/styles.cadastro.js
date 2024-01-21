import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: ${theme.colors.primaryDark};
    padding-bottom: 1rem;
    text-align: center;
  }

  form {
    display: flex;
    border-radius: 0.3rem;
    border: 0.5px dashed ${theme.colors.primaryDark};
    padding: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
