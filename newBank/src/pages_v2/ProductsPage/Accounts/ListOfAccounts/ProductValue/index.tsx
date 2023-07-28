import React, { ReactNode } from "react";

import { ListOfAccountType } from "../../../../../services/api/getListOfAccounts";

import { RightArrowI } from "../../../../../components_v2/Icon";

import { CopyField } from "../../../../../components_v2/CopyField";

import styles from "./ProductValue.module.css";

type ProductValueType = {
  account: ListOfAccountType;
  children: ReactNode;
  activeField: boolean;
};

export const ProductValue: React.FC<ProductValueType> = ({
  account,
  children,
  activeField,
}) => (
  <div className={styles.container}>
    <div className={styles.account_info}>
      <div className={styles.title}>{account.bankProductName}</div>
      {children}
    </div>

    <div className={styles.arrow_link}>
      <div className={styles.icon_container}>
        <RightArrowI className={styles.arrow_icon} />
      </div>
    </div>
    {activeField && (
      <div className={styles.copied_message}>
        <CopyField />
      </div>
    )}
  </div>
);
