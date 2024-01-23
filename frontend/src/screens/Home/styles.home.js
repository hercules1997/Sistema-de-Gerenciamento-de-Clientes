import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Button } from "../../components/Button";

export const Main = styled.main`
  display: flex;
  gap: 0.75rem;
  width: 100%;
  border-top: 0.5px solid ${theme.colors.primaryDark};
  border-bottom: 0.5px solid ${theme.colors.primaryDark};
  align-items: center;
  justify-content: center;
`;
export const ContainerLeft = styled.div`
  /* background-color: ${theme.colors.primaryDark}; */
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;
  min-height: 37rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-around;


`;
export const ContainerRight = styled.div`

  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
 
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 3rem 1.5rem 3rem;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
export const ContentChart = styled.div`
  display: flex;
  flex-direction: column;

  width: 40%;

  h1 {
    text-align: center;
    color: ${theme.colors.primaryDark};
  }
`;
export const ContentRote = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
gap: 10px;
  width: 60%;

  h1 {
    text-align: center;
    color: ${theme.colors.primaryDark};
  }
`;
export const CardModal = styled.div`
  display: flex;
  margin-bottom: 5px;
  border-bottom: 1px dashed ${theme.colors.primaryDark};
  justify-content: space-evenly;
  padding: 1.5rem 3rem 1.5rem 3rem;
  width: 100%;

  .title {
    color: green;
    margin-right: 5px;
  }

  .text {
    color: white;
  }
`;
export const ButtonCancel = styled(Button)`
  background-color: transparent;
  border: 0.5px dashed ${theme.colors.primaryDark};
  color: ${theme.colors.light};
  float: right;
  width: 40px;
  right: 10px;
  top: 10px;
`;

export const ContainerButton = styled.div`
  display: flex;
  gap: 10px;

  .btn-calculator,
  .btn-clean {
    width: 120px;
    padding: 0px 8px 0px 8px;
  }

  .btn-calculator {
    border: none;
  }
  .btn-clean {
    color: ${theme.colors.light};
    background: ${theme.colors.error};
 
  }
`;

