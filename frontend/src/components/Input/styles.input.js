import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ComponentInput = styled.input`
  display: flex;
  width: 100%;
  flex-direction: column;
  color: ${theme.colors.light};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.boderRadius || "0.3rem"};
  padding: 0.625rem;
  margin: 0.3125rem;
  margin-bottom: 1rem;
  border: none;
  background-color: ${theme.colors.primaryDark};

  &::placeholder {
    color: ${theme.colors.dark};
  }
`;
