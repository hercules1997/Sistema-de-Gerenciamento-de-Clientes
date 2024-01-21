import styled from "styled-components";
import { theme } from "../../styles/theme";


export const ComponentButton = styled.button`
    background-color: ${theme.colors.neutral};
    width: 100%;
    height: 3rem;
    border-radius: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;

 &:hover {
    background-color: ${theme.colors.primary};
      transition: all 500ms;
 }
`;