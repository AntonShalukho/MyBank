import React from "react";

import { useIntl } from "react-intl";

import { SmsForm } from "./SmsForm";

import styles from "./ConfirmationBlock.module.css";

type AccountFormValuesType = {
  bankProductName: string;
  accountName: string;
  currency: {
    name: string;
  };
  verifyCode: string;
};

type ConfirmationBlockType = {
  closeConfirmation(): void;
  handleErrorSubmit: () => void;
  accountFormValue: AccountFormValuesType;
};

export const ConfirmationBlock = ({
  closeConfirmation,
  handleErrorSubmit,
  accountFormValue,
}: ConfirmationBlockType) => {
  const intl = useIntl();
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        {intl.formatMessage({ id: "enterTelegramCode" })}
      </div>
      <div className={styles.inform}>
        <span>{intl.formatMessage({ id: "sentCodeToChatBot" })}</span>
        <span>{intl.formatMessage({ id: "proceedEnterBelow" })}</span>
      </div>
      <div className={styles.confirm_code}>
        <SmsForm
          closeConfirmation={closeConfirmation}
          handleErrorSubmit={handleErrorSubmit}
          accountFormValue={accountFormValue}
        />
      </div>
    </div>
  );
};
