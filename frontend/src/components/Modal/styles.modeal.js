import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  padding: 30px;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background: ${theme.colors.dark};
  padding: 20px;
  border-radius: 5px;
  max-width: 800px;
  width: 100%;

  h2 {
    color: ${theme.colors.primaryDark};
    text-align: center;
  }
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  padding: 2px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
`;
