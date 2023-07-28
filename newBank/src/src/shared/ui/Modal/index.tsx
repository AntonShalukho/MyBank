import React, { ReactNode, useRef } from "react";

import { createPortal } from "react-dom";

import classNames from "classnames";

import { CloseIcon } from "../../assets/icons";

import { Button } from "../Button";

import { BackButton } from "../BackButton";

import { useClickOutside } from "../../lib/hooks/useClickOutside";

import styles from "./ModalStyles.module.scss";

export type ModalProps = {
  onBackClick?: () => void;
  onClose: () => void;
  children: ReactNode;
  backdrop?: boolean;
  className?: string;
};

export const Modal: React.FC<ModalProps> = ({
  onBackClick,
  onClose,
  children,
  backdrop,
  className,
}) => {
  const modalRootRef = document.getElementById("modal-root");
  const contentWrapperRef = useRef<HTMLDivElement>(null);

  useClickOutside(contentWrapperRef, onClose);

  if (!modalRootRef) return null;

  return createPortal(
    <div
      className={classNames(styles.modal_backdrop, {
        visible: backdrop,
      })}
    >
      <div
        ref={backdrop ? contentWrapperRef : null}
        className={className ? `modal-wrapper ${className}` : "modal-wrapper"}
      >
        {onBackClick && (
          <div className="button-container back">
            <BackButton onClick={onBackClick} />
          </div>
        )}
        {onClose && (
          <Button
            className="button-container close"
            variant="advertisement"
            onClick={onClose}
          >
            <CloseIcon />
          </Button>
        )}
        <div className="modal-content">{children}</div>
      </div>
    </div>,
    modalRootRef
  );
};
