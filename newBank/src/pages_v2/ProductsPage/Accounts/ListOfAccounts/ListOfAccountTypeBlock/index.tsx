import React from "react";

import { ListOfAccountType } from "../../../../../services/api/getListOfAccounts";

import { Product } from "../Product";

import styles from "./ListOfAccountTypeBlock.module.css";

type ListOfAccountTypeBlockType = {
  accounts: ListOfAccountType[];
};

export const ListOfAccountTypeBlock: React.FC<ListOfAccountTypeBlockType> = ({
  accounts,
}) => (
  <div className={styles.current_block}>
    {accounts.map((account) => (
      <Product account={account} key={account.iban} />
    ))}
  </div>
);
