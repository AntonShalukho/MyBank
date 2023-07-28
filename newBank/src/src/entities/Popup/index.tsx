import React, { useState } from "react";

import { createPortal } from "react-dom";

import classNames from "classnames";

import { Button } from "../../shared/ui/Button";

import { MODAL_ROOT_CONTAINER } from "../../shared/consts";

import { PopupProps } from "./types";

import styles from "./Popup.module.scss";

export const Popup: React.FC<PopupProps> = ({
  children,
  buttonContent,
  onClose,
  modalContainer,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const container = modalContainer || MODAL_ROOT_CONTAINER;
  const handleClickClose = () => {
    onClose && onClose();
    setIsOpen(false);
  };
  return container && isOpen
    ? createPortal(
        <div className={classNames(styles.popup, styles.backdrop, className)}>
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
