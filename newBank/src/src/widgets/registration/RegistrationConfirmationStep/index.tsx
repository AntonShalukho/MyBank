import React, { useState } from "react";

import { useIntl } from "react-intl";

import { useNavigate } from "react-router";

import { GirlSuccessIcon } from "src/shared/assets/icons";

import { Button } from "src/shared/ui/Button";

import { getCookie } from "src/shared/lib/cookieHandlers";

import { getSignUpNavigateLink } from "src/shared/lib/getSignUpNavigateLink";

import { CancelRegistrationPopup } from "src/widgets/CancelRegistrationPopup";

import { useSpinner } from "src/shared/lib/hooks/useSpinner";

import { sendFinalAgreement } from "./api/sendFinalRegistrationStep";

import styles from "./RegistrationConfirmation.module.scss";

export const RegistrationConfirmationStep = () => {
  const [isCancel, setIsCancel] = useState<boolean>(false);
  const { toggleSpinner } = useSpinner();
  const navigate = useNavigate();
  const intl = useIntl();

  const handleSubmit = (agreement: boolean) => {
    const uuid = getCookie("uuid");
    const requestBody = {
      uuid: uuid as string,
      agreement,
    };
    toggleSpinner(true);
    sendFinalAgreement(requestBody)
      .then((data) => {
        data.Step.next && navigate(getSignUpNavigateLink(data.Step.next));
      })
      .finally(() => toggleSpinner(false));
  };

  const handleClose = () => {
    setIsCancel(false);
  };

  const handleCancelPopup = () => {
    setIsCancel(true);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{intl.formatMessage({ id: "signUp" })}</h1>
      <h2 className={styles.sub_title}>
        {intl.formatMessage({ id: "widget_registrationConfirmation" })}
      </h2>
      <GirlSuccessIcon className={styles.icon_pic} />
      <div className={styles.button_container}>
        <Button
          variant="primarySmall"
          className={styles.button}
          onClick={handleSubmit.bind(this, true)}
        >
          {intl.formatMessage({ id: "agree" })}
        </Button>
        <Button
          variant="secondarySmall"
          className={styles.button}
          onClick={handleCancelPopup}
        >
          {intl.formatMessage({ id: "cancel" })}
        </Button>
      </div>
      {isCancel && (
        <CancelRegistrationPopup
          onClose={handleClose}
          handleSideEffects={handleSubmit.bind(this, false)}
        />
      )}
    </div>
  );
};
