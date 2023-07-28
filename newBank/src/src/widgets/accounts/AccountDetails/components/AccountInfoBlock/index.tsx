import React from "react";

import { useIntl } from "react-intl";

import { SAVING } from "src/shared/consts/accounts";

import { AccountInfoBlockType } from "../../types";

import styles from "./AccountInfoBlock.module.scss";

export const AccountInfoBlock: React.FC<AccountInfoBlockType> = ({
  account,
}) => {
  const intl = useIntl();
  return (
    <div className={styles.wrapper}>
      {account.bankProductName === SAVING && (
        <div className={styles.interest_wrapper}>
          <div className={styles.title}>
            {intl.formatMessage({ id: "widget_interestRate" })}
          </div>
          <div className={styles.value}>
            <span className={styles.interest_container}>
              {+account.interest}%
            </span>
          </div>
        </div>
      )}
      <div className={styles.date_wrapper}>
        <div className={styles.title}>
          {intl.formatMessage({ id: "widget_dateOfOpening" })}
        </div>
        <div className={styles.value}>
          <span className={styles.data_container}>{account.openDate}</span>
        </div>
      </div>
    </div>
  );
};
