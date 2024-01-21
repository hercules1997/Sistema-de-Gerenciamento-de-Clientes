import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ContainerMaster = styled.div`
  color: ${theme.colors.light};

  width: 100%;
  /* background-color: ${theme.colors.dar}; */
  align-items: center;

  padding: 1rem;

  div {
    display: grid;
    padding: 0.5rem;
    border-radius: 0.3rem;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    width: 100%;
  }

  > h2 {
    text-align: center;
    color: ${theme.colors.primaryDark};
  }
`;
export const Content = styled.div`
  display: flex;
 border: 0.5px dashed ${theme.colors.primaryDark};
  color: ${theme.colors.light};

  span {
    width: 100%;
    display: flex;

    flex-direction: column;
  }
`;

