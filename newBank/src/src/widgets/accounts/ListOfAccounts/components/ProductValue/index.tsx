import React from "react";

import { CopyField } from "src/shared/ui/CopyField";

import { RightArrowI } from "src/shared/assets/icons/components/RightArrowI";

import { ProductValueType } from "../../types";

import styles from "./ProductValue.module.scss";

export const ProductValue = ({
  account,
  children,
  activeField,
}: ProductValueType) => (
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
