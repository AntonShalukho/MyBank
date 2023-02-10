import React from "react";

import { FormattedMessage } from "react-intl";

import { AccountDetailsType } from "../../../../../../services/api/getAccountDetails";

import styles from "./AccountInfoBlock.module.css";

type AccountInfoBlockType = {
  account: AccountDetailsType;
};

export const AccountInfoBlock: React.FC<AccountInfoBlockType> = ({
  account,
}) => (
  <div className={styles.wrapper}>
    <div className={styles.infoBlock_interest}>
      <div className={styles.infoBlock__title}>
        <FormattedMessage id="accountCurrentInterestRate" />
      </div>
      <div className={styles.infoBlock__value}>{+account.interest}%</div>
    </div>
    <div className={styles.infoBlock_type}>
      <div className={styles.infoBlock__title}>
        <FormattedMessage id="accountDetailsType" />
      </div>
      <div className={styles.infoBlock__value}>{account.bankProductName}</div>
    </div>
    <div className={styles.infoBlock_date}>
      <div className={styles.infoBlock__title}>
        <FormattedMessage id="accountDetailsDate" />
      </div>
      <div className={styles.infoBlock__value}>{account.openDate}</div>
    </div>
  </div>
);
