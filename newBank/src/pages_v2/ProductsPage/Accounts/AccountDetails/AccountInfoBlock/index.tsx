import React from "react";

import { useIntl } from "react-intl";

import { AccountDetailsType } from "../../../../../services/api/getAccountDetails";

import { SAVING } from "../../ListOfAccounts/constants";

import styles from "./AccountInfoBlock.module.css";

type AccountInfoBlockType = {
  account: AccountDetailsType;
};

export const AccountInfoBlock: React.FC<AccountInfoBlockType> = ({
  account,
}) => {
  const intl = useIntl();
  return (
    <div className={styles.wrapper}>
      {account.bankProductName === SAVING && (
        <div className={styles.interest_wrapper}>
          <div className={styles.title}>
            {intl.formatMessage({ id: "accountInterestRate" })}
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
          {intl.formatMessage({ id: "accountDetailsDate" })}
        </div>
        <div className={styles.value}>
          <span className={styles.data_container}>{account.openDate}</span>
        </div>
      </div>
    </div>
  );
};
