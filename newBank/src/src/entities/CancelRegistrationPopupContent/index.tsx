import React from "react";

import { useIntl } from "react-intl";

import { Button } from "src/shared/ui/Button";

import leaveIcon from "./assets/icons/static/leaveRegistration.png";

import { PopupContentType } from "./types";

import styles from "./CancelRegistrationPopupContent.module.scss";

export const CancelRegistrationPopupContent = ({
  handleCancel,
  handleConfirm,
}: PopupContentType) => {
  const intl = useIntl();

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        {intl.formatMessage({ id: "entities_wantFinishRegistration" })}
      </div>
      <img src={leaveIcon} alt="leaveIcon" className={styles.icon_pic} />
      <div className={styles.button_container}>
        <Button
          variant="secondarySmall"
          className={styles.button}
          onClick={handleCancel}
        >
          {intl.formatMessage({ id: "cancel" })}
        </Button>
        <Button
          variant="primarySmall"
          className={styles.button}
          onClick={handleConfirm}
        >
          {intl.formatMessage({ id: "confirm" })}
        </Button>
      </div>
    </div>
  );
};
