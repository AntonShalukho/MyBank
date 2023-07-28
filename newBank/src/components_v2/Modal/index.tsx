import React, { ReactNode, useRef } from "react";

import { createPortal } from "react-dom";

import classNames from "classnames";

import closeImg from "../../uikit/static/closeImg_v2.svg";

import { Button } from "../../uikit_v2/Button";

import { BackButton } from "../BackButton";

import { useClickOutside } from "../../utils/hooks/useClickOutside";

import "./ModalStyles.css";

export type ModalProps = {
  onBackClick?: () => void;
  onClose: () => void;
  children: ReactNode;
  backdrop?: boolean;
  className?: string;
  closeButtonClassName?: string;
};

export const Modal: React.FC<ModalProps> = ({
  onBackClick,
  onClose,
  children,
  backdrop,
  className,
  closeButtonClassName,
}) => {
  const modalRootRef = document.getElementById("modal-root");
  const contentWrapperRef = useRef<HTMLDivElement>(null);

  useClickOutside(contentWrapperRef, onClose);

  return modalRootRef
    ? createPortal(
        <div
          data-testid="modal"
          className={classNames("modal-backdrop", {
            visible: backdrop,
          })}
        >
          <div
            ref={backdrop ? contentWrapperRef : null}
            className={
              className
                ? `modal-wrapper user_profile_popup ${className}`
                : " user_profile_popup modal-wrapper"
            }
          >
            {onBackClick && (
              <div className="button-container back">
                <BackButton onClick={onBackClick} />
              </div>
            )}
            {onClose && (
              <Button
                className={classNames(
                  "button-container close",
                  closeButtonClassName
                )}
                variant="advertisement"
                onClick={onClose}
              >
                <img src={closeImg} alt="close" />
              </Button>
            )}
            <div className="modal-content">{children}</div>
          </div>
        </div>,
        modalRootRef
      )
    : null;
};
