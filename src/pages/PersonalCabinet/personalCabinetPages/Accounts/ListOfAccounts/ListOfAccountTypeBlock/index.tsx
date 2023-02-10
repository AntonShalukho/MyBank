import React from "react";

import { useIntl } from "react-intl";

import { ProductInfo } from "../ProductInfo";

import { ProductValue } from "../ProductValue";

import { ListOfAccountType } from "../../../../../../services/api/getListOfAccounts";

import styles from "./ListOfAccountTypeBlock.module.css";

type ListOfAccountTypeBlockType = {
  title: string;
  accounts: ListOfAccountType[];
};

export const ListOfAccountTypeBlock: React.FC<ListOfAccountTypeBlockType> = ({
  title,
  accounts,
}) => {
  const intl = useIntl();

  return (
    <div className={styles.current_block}>
      <div className={styles.current_title}>
        {intl.formatMessage({ id: title })}
      </div>

      {accounts.map((account) => (
        <div key={account.iban} className={styles.current_data_block}>
          <ProductInfo account={account} />
          <ProductValue account={account} />
        </div>
      ))}
    </div>
  );
};
