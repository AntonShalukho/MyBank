import React, { useState } from "react";

import { useIntl } from "react-intl";

import { useNavigate } from "react-router";

import classNames from "classnames";

import { GirlSuccessIcon } from "../../../../components_v2/Icon";

import { Button } from "../../../../uikit_v2/Button";

import { Popup } from "../../../../components_v2/Popup";

import { Spinner } from "../../../../uikit_v2/Spinner";

import { sendFinalAgreement } from "../../../../services/api/sendFinalRegistrationStep";

import { getCookie } from "../../../../utils/cookieHandlers";

import { getSignUpNavigateLink } from "../StepConfig/getSignUpNavigateLink";

import { PopupContent } from "../ProgressBar/PopupContent";

import styles from "./RegistrationConfirmation.module.css";

export const RegistrationConfirmation = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCancel, setIsCancel] = useState<boolean>(false);
  const navigate = useNavigate();
  const intl = useIntl();

  const handleSubmit = (agreement: boolean) => {
    const uuid = getCookie("uuid");
    const requestBody = {
      uuid: uuid as string,
      agreement,
    };
    setIsLoading(true);
    sendFinalAgreement(requestBody)
      .then((data) => {
        navigate(getSignUpNavigateLink(data.Step.next));
      })
      .finally(() => setIsLoading(false));
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
        {intl.formatMessage({ id: "registrationConfirmationTitle" })}
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
          className={classNames(styles.button, styles.greyButton)}
          onClick={handleCancelPopup}
        >
          {intl.formatMessage({ id: "cancel" })}
        </Button>
      </div>
      {isLoading && (
        <Popup className={styles.popup}>
          <Spinner />
        </Popup>
      )}
      {isCancel && (
        <Popup className={styles.backdrop}>
          <PopupContent
            onClose={handleClose}
            handleSideEffects={handleSubmit.bind(this, false)}
          />
        </Popup>
      )}
    </div>
  );
};
