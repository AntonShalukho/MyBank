import React, { useRef } from "react";

import { useIntl } from "react-intl";

import { useClickOutside } from "src/shared/lib/hooks/useClickOutside";

import classNames from "classnames";

import { Button } from "src/shared/ui/Button";

import { CrossCloseImage } from "src/shared/assets/icons/components/CrossCloseImage";

import { Popup } from "../Popup";

import { UnsuccessAccountPopupType } from "./types";

import { UnsuccessIcon } from "../../shared/assets/icons";

import styles from "./UnsuccessAccountPopup.module.scss";

export const UnsuccessAccountPopup = ({
  onClose,
  backdrop,
  className,
}: UnsuccessAccountPopupType) => {
  const intl = useIntl();
  const contentWrapperRef = useRef<HTMLDivElement>(null);

  useClickOutside(contentWrapperRef, onClose);

  return (
    <Popup>
      <div
        className={classNames("modal-backdrop", {
          visible: backdrop,
        })}
      >
        <div
          ref={backdrop ? contentWrapperRef : null}
          className={className ? `modal-wrapper ${className}` : "modal-wrapper"}
        >
          {onClose && (
            <Button
              className="button-container close"
              variant="advertisement"
              onClick={onClose}
            >
              <CrossCloseImage />
            </Button>
          )}
          <div className="modal-content">
            <div className={styles.wrapper}>
              <UnsuccessIcon className={styles.icon} />
              <p className={styles.title}>
                {intl.formatMessage({ id: "accountModalLock" })}
              </p>
              <p className={styles.description}>
                {intl.formatMessage({ id: "accountModalLockDescription" })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
};
