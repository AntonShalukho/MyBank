import React, { ReactNode, useState } from "react";

import { createPortal } from "react-dom";

import { Button } from "../../uikit_v2/Button";

import { MODAL_ROOT_CONTAINER } from "../../utils/variables";

import "./PopupStyles.css";

export type PopupProps = {
  children: ReactNode | JSX.Element;
  modalContainer?: HTMLElement;
  className?: string;
  buttonContent?: ReactNode;
  onClose?: () => void;
};

export const Popup: React.FC<PopupProps> = ({
  children,
  className,
  buttonContent,
  onClose,
  modalContainer,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const container = modalContainer || MODAL_ROOT_CONTAINER;
  const handleClickClose = () => {
    onClose && onClose();
    setIsOpen(false);
  };
  return container && isOpen
    ? createPortal(
        <div className={`popup-container ${className}`}>
          {children}
          {buttonContent && (
            <Button variant="advertisement" onClick={handleClickClose}>
              {buttonContent}
            </Button>
          )}
        </div>,
        container
      )
    : null;
};
