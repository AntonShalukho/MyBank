import React from "react";

import { useField } from "formik";

import { useIntl } from "react-intl";

import styles from "./AccountInterestBlock.module.css";

type AccountInterestBlockType = {
  interest: string;
};

export const AccountInterestBlock: React.FC<AccountInterestBlockType> = ({
  interest,
}) => {
  const [field, meta, helpers] = useField(interest);
  const { value } = meta;
  const intl = useIntl();

  return (
    <div className={styles.account_name_wrapper}>
      <div className={styles.account_name__title}>
        {intl.formatMessage({ id: "accountInterestRate" })}
      </div>
      <div className={styles.account_name__input}>{value}%</div>
    </div>
  );
};
