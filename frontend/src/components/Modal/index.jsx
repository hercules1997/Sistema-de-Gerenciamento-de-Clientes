/* eslint-disable react/prop-types */
import ReactDOM from "react-dom";
import { ModalOverlay, ModalContent, CloseButton } from "./styles.modeal";
export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalOverlay className="modal-overlay">
      <ModalContent className="modal-content">
        <CloseButton className="close-btn" onClick={onClose}>
          &times;
        </CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>,
    document.getElementById("modal-root")
  );
};
