import React, { useState } from "react";

import { useIntl } from "react-intl";

import { Button } from "src/shared/ui/Button";

import { UnsuccessIcon } from "src/shared/assets/icons";

import { CancelRegistrationPopup } from "src/widgets/CancelRegistrationPopup";

import { UnsuccessSelfieType } from "../../types";

import styles from "./UnsuccessSelfie.module.scss";

export const UnsuccessSelfie = ({
  onClose,
  isLastAttempt,
  handleOfflineStep,
  clearPlayVideoInterval,
}: UnsuccessSelfieType) => {
  const [isLeaveRegistrationProcess, setIsLeaveRegistrationProcess] =
    useState<boolean>(false);
  const intl = useIntl();

  const handleClosePopup = () =>
    setIsLeaveRegistrationProcess(!isLeaveRegistrationProcess);

  const handleCancel = () => {
    handleClosePopup();
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        {intl.formatMessage({ id: "widget_notVerifyBiometry" })}
      </h2>
      <UnsuccessIcon className={styles.icon} />
      <p className={styles.description}>
        {intl.formatMessage({
          id: isLastAttempt
            ? "widget_withoutCameraOptions"
            : "widget_notVerifyBiometryDesc",
        })}
      </p>
      <div className={styles.wrapper_button}>
        <Button
          variant="primarySmall"
          onClick={isLastAttempt ? handleOfflineStep : onClose}
        >
          {intl.formatMessage({
            id: isLastAttempt ? "widget_continueOffline" : "tryAgain",
          })}
        </Button>
        <Button variant="secondarySmall" onClick={handleCancel}>
          {intl.formatMessage({ id: "cancel" })}
        </Button>
      </div>
      {isLeaveRegistrationProcess && (
        <CancelRegistrationPopup
          onClose={handleClosePopup}
          handleSideEffects={clearPlayVideoInterval}
        />
      )}
    </div>
  );
};
