import React, { ReactNode, useRef } from "react";

import { createPortal } from "react-dom";

import classNames from "classnames";

import { useLocation } from "react-router";

import closeImg from "../../uikit/static/closeImg.svg";

import { Button } from "../../uikit/Button";

import { BackButton } from "../BackButton";

import { useClickOutside } from "../../utils/useClickOutside";

import "./ModalStyles.css";

const modalRootRef = document.querySelector("#modal-root")!;

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
  const contentWrapperRef = backdrop ? useRef<HTMLDivElement>(null) : null;
  useClickOutside(contentWrapperRef, onClose);
  const { pathname } = useLocation();
  return createPortal(
    <div
      className={classNames("modal-backdrop", {
        visible: backdrop,
        "atm-change-location-modal": pathname === "/atms",
      })}
    >
      <div
        ref={contentWrapperRef}
        className={className ? `modal-wrapper ${className}` : "modal-wrapper"}
      >
        {onBackClick && (
          <div className="button-container back">
            <BackButton onClick={onBackClick} />
          </div>
        )}
        {onClose && (
          <div className="button-container close">
            <Button onClick={onClose}>
              <img src={closeImg} alt="close" />
            </Button>
          </div>
        )}

        <div className="modal-content">{children}</div>
      </div>
    </div>,
    modalRootRef
  );
};
