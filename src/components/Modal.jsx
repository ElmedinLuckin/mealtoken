import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

const Modal = ({ children, open, onClose, className = "" }) => {
  const dialog = useRef();
  const modalRoot = document.getElementById("modal");

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    modalRoot
  );
};

export default Modal;
