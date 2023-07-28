import React from "react";

import { CurrencyIcon } from "src/shared/ui/CurrencyIcon";

import { ProductType } from "../../types";

import { prettifyBalance } from "../../../../../shared/lib/prettifyBalance";

import styles from "./ProductInfo.module.scss";

export const ProductInfo = ({ account }: ProductType) => (
  <div className={styles.current_value_block}>
    <div className={styles.current_account_name}>{account.accountName}</div>
    <div className={styles.current_account_data}>
      <div className={styles.logo_currency}>
        <CurrencyIcon currency={account.currency.name} />
      </div>
      <div className={styles.name_currency}>{account.currency.name}</div>
      <div className={styles.value_currency}>
        {prettifyBalance(account.balance)}
      </div>
    </div>
  </div>
);
