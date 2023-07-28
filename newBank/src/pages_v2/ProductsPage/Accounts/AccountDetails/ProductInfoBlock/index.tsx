import React from "react";

import { AccountDetailsType } from "../../../../../services/api/getAccountDetails";

import { prettifyBalance } from "../../ListOfAccounts/utils/prettifyBalance";

import styles from "./ProductInfoBlock.module.css";

type ProductInfoType = {
  account: AccountDetailsType;
};

export const ProductInfoBlock: React.FC<ProductInfoType> = ({ account }) => (
  <div className={styles.current_value_block}>
    <div className={styles.current_account_data}>
      <div className={styles.logo_currency}>
        {account.currency.picture_link && (
          <img src={account.currency.picture_link} alt="currency icon" />
        )}
      </div>
      <div className={styles.name_currency}>{account.currency.name}</div>
      <div className={styles.value_currency}>
        {prettifyBalance(account.balance)}
      </div>
    </div>
  </div>
);
