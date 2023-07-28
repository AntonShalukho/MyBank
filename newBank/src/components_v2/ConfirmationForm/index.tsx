import React from "react";

import { useIntl } from "react-intl";

import { SmsForm } from "./SmsForm";

import { ResponseType } from "../../services/api/sendVerificationEmailCode";

import styles from "./ConfirmationForm.module.css";

type ConfirmationFormType = {
  onClose(): void;
  onSuccessResponse: (data?: ResponseType) => void;
  resendVerifyCode: () => void;
};

export const ConfirmationForm = ({
  onClose,
  onSuccessResponse,
  resendVerifyCode,
}: ConfirmationFormType) => {
  const intl = useIntl();
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        {intl.formatMessage({ id: "securityCodeMessageEmail" })}
      </div>
      <div className={styles.inform}>
        <span>{intl.formatMessage({ id: "securityCodeSubtitleEmail" })}</span>
        <span>{intl.formatMessage({ id: "proceedMessage" })}</span>
      </div>
      <div className={styles.confirm_code}>
        <SmsForm
          onClose={onClose}
          handleSuccessResponse={onSuccessResponse}
          resendVerifyCode={resendVerifyCode}
        />
      </div>
    </div>
  );
};
