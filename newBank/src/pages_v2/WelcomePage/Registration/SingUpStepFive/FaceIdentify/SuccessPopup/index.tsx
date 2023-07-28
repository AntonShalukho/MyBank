import React, { useState } from "react";

import { useIntl } from "react-intl";

import { SelfieSuccessIcon } from "../../../../../../components_v2/Icon";

import { Button } from "../../../../../../uikit_v2/Button";

import { Popup } from "../../../../../../components_v2/Popup";

import { PopupContent } from "../../../ProgressBar/PopupContent";

import styles from "./SuccessPopup.module.css";

type SuccessPopupType = {
  handleSubmit(): void;
  handleSideEffects(): void;
};

export const SuccessPopup = ({
  handleSubmit,
  handleSideEffects,
}: SuccessPopupType) => {
  const [isLeaveRegistrationProcess, setIsLeaveRegistrationProcess] =
    useState<boolean>(false);
  const intl = useIntl();

  const onClose = () => {
    setIsLeaveRegistrationProcess(!isLeaveRegistrationProcess);
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>
        {intl.formatMessage({ id: "successSelfie" })}
      </p>
      <SelfieSuccessIcon className={styles.icon} />
      <div className={styles.buttons_container}>
        <Button
          variant="primarySmall"
          className={styles.button}
          onClick={handleSubmit}
        >
          {intl.formatMessage({ id: "continueButtonText" })}
        </Button>
        <Button
          variant="secondarySmall"
          className={styles.button}
          onClick={onClose}
        >
          {intl.formatMessage({ id: "cancel" })}
        </Button>
      </div>
      {isLeaveRegistrationProcess && (
        <Popup className={styles.backdrop}>
          <PopupContent
            onClose={onClose}
            handleSideEffects={handleSideEffects}
          />
        </Popup>
      )}
    </div>
  );
};
