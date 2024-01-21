import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Main = styled.main`
  display: flex;
  gap: 0.75rem;
  width: 100%;
  padding: 0 1.5rem 1.5rem 1.5rem;
`;
export const ContainerLeft = styled.div`
  /* background-color: ${theme.colors.primaryDark}; */
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContainerRight = styled.div`
  /* background-color: ${theme.colors.primaryDark}; */
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
export const ContentChart = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 3rem 1.5rem 3rem;
  width: 100%;

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
