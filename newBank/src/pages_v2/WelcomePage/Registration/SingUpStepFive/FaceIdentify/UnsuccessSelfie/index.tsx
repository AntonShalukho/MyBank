import React, { useState } from "react";

import { useIntl } from "react-intl";

import { Button } from "../../../../../../uikit_v2/Button";

import { UnsuccessIcon } from "../../../../../../components_v2/Icon";

import { Popup } from "../../../../../../components_v2/Popup";

import { PopupContent } from "../../../ProgressBar/PopupContent";

import styles from "./UnsuccessSelfie.module.css";

type UnsuccessSelfieType = {
  onClose(): void;
  isLastAttempt: boolean;
  handleOfflineStep(): void;
  clearPlayVideoInterval(): void;
};

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
        {intl.formatMessage({ id: "wasNotVerifyBiometry" })}
      </h2>
      <UnsuccessIcon className={styles.icon} />
      <p className={styles.description}>
        {intl.formatMessage({
          id: isLastAttempt
            ? "wasNotVerifyBiometryDescriptionLastAttempt"
            : "wasNotVerifyBiometryDescription",
        })}
      </p>
      <div className={styles.wrapper_button}>
        <Button
          variant="primarySmall"
          onClick={isLastAttempt ? handleOfflineStep : onClose}
        >
          {intl.formatMessage({
            id: isLastAttempt ? "continueOffline" : "tryAgain",
          })}
        </Button>
        <Button variant="secondarySmall" onClick={handleCancel}>
          {intl.formatMessage({ id: "cancel" })}
        </Button>
      </div>
      {isLeaveRegistrationProcess && (
        <Popup className={styles.backdrop}>
          <PopupContent
            onClose={handleClosePopup}
            handleSideEffects={clearPlayVideoInterval}
          />
        </Popup>
      )}
    </div>
  );
};
