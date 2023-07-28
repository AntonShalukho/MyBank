import React, { useState } from "react";

import { useIntl } from "react-intl";

import { SelfieSuccessIcon } from "src/shared/assets/icons";

import { Button } from "src/shared/ui/Button";

import { CancelRegistrationPopup } from "src/widgets/CancelRegistrationPopup";

import { SuccessPopupType } from "../../types";

import styles from "./SuccessPopup.module.scss";

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
        {intl.formatMessage({ id: "widget_successBiometric" })}
      </p>
      <SelfieSuccessIcon className={styles.icon} />
      <div className={styles.buttons_container}>
        <Button
          variant="primarySmall"
          className={styles.button}
          onClick={handleSubmit}
        >
          {intl.formatMessage({ id: "continue" })}
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
        <CancelRegistrationPopup
          onClose={onClose}
          handleSideEffects={handleSideEffects}
        />
      )}
    </div>
  );
};
