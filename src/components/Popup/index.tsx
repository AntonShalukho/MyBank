import React, { ReactNode, useState } from "react";

import { Button, IButtonProps } from "../../uikit/Button/index";

import "./PopupStyles.css";

interface PopupProps extends IButtonProps {
  children: ReactNode | JSX.Element;
  className?: string;
  buttonContent?: ReactNode;
  onClose?: () => void;
}

export const Popup = ({
  children,
  className = "",
  buttonContent,
  onClose,
  ...props
}: PopupProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClickClose = () => {
    onClose && onClose();
    setIsOpen(false);
  };
  return (
    <>
      {isOpen && (
        <div className={`popup-container ${className}`}>
          {children}
          <Button {...props} onClick={handleClickClose}>
            {buttonContent}
          </Button>
        </div>
      )}
    </>
  );
};
