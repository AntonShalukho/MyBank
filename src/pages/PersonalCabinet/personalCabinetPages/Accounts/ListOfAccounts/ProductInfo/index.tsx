import React from "react";

import { ListOfAccountType } from "../../../../../../services/api/getListOfAccounts";

import { PLN, EUR, USD } from "../../../../../../components/Icons";

import { prettifyBalance } from "../utils/prettifyBalance";

import styles from "./ProductInfo.module.css";

type ProductInfoType = {
  account: ListOfAccountType;
};

export const ProductInfo: React.FC<ProductInfoType> = ({ account }) => {
  const currencyMap = {
    PLN: <PLN className={styles.currency_block__icon} />,
    USD: <USD className={styles.currency_block__icon} />,
    EUR: <EUR className={styles.currency_block__icon} />,
  };

  return (
    <div className={styles.current_value_block}>
      <div className={styles.current_account_name}>{account.accountName}</div>
      <div className={styles.current_account_data}>
        <div className={styles.logo_currency}>
          {currencyMap[account.currency.name as keyof typeof currencyMap]}
        </div>
        <div className={styles.value_currency}>
          {prettifyBalance(account.balance)}
        </div>
        <div className={styles.name_currency}>{account.currency.name}</div>
      </div>
    </div>
  );
};
