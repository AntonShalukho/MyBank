import React from "react";

import { Product } from "../Product";

import { ProductsListType } from "../../types";

import styles from "./ProductsList.module.scss";

export const ProductsList = ({ accounts }: ProductsListType) => (
  <div className={styles.current_block}>
    {accounts.map((account) => (
      <Product account={account} key={account.iban} />
    ))}
  </div>
);
