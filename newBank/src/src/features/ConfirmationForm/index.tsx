import React from "react";

import { useIntl } from "react-intl";

import { EmailForm } from "./components/EmailForm";

import { ConfirmationFormType } from "./types";

import styles from "./ConfirmationForm.module.scss";

export const ConfirmationForm = ({
  onClose,
  onSuccessResponse,
  resendVerifyCode,
}: ConfirmationFormType) => {
  const intl = useIntl();
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        {intl.formatMessage({ id: "feature_securityCode" })}
      </div>
      <div className={styles.inform}>
        <span>{intl.formatMessage({ id: "feature_subtitleEmail" })}</span>
        <span>{intl.formatMessage({ id: "feature_proceedMessage" })}</span>
      </div>
      <div className={styles.confirm_code}>
        <EmailForm
          onClose={onClose}
          onSuccessResponse={onSuccessResponse}
          resendVerifyCode={resendVerifyCode}
        />
      </div>
    </div>
  );
};
