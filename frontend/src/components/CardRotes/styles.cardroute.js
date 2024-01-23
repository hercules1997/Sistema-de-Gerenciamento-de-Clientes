import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Button } from "../Button";
import { Title } from "../Title";

export const ContainerMaster = styled.div`
  color: ${theme.colors.light};

  min-height: 100px;
  width: 100%;
  align-items: center;

  padding: 1rem;

  > div {
    display: grid;
    padding: 0.5rem;

    width: 100%;
    max-height: 37rem;
    overflow-y: auto;
    text-align: center;
    align-items: center;

    border-radius: 0.3rem;
    gap: 1rem;
  }

  > h2 {
    text-align: center;
    color: ${theme.colors.primaryDark};
  }
`;
export const Content = styled.div`
  display: flex;

  color: ${theme.colors.light};

  > span {
    width: 100%;
    display: flex;

    gap: 0.4rem;
    border-top: 0.5px dashed ${theme.colors.primaryDark};
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
export const ButtonAdd = styled(Button)`
  background-color: transparent;

  color: ${theme.colors.light};
  border: none;

  width: 40px;
`;
export const TitleStyle = styled(Title)`
  display: flex;
  background-color: transparent;
  border: 0.5px dashed ${theme.colors.primaryDark};
  color: ${theme.colors.light};
  justify-content: center;
  align-items: center;
  text-align: center;
`;
