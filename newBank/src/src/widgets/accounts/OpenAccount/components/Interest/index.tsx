import React from "react";

import { useField } from "formik";

import { useIntl } from "react-intl";

import { InterestType } from "../../types";

import styles from "./Interest.module.scss";

export const Interest: React.FC<InterestType> = ({ interest }) => {
  const [field, meta, helpers] = useField(interest);
  const { value } = meta;
  const intl = useIntl();

  return (
    <div className={styles.account_name_wrapper}>
      <div className={styles.account_name__title}>
        {intl.formatMessage({ id: "widget_interestRate" })}
      </div>
      <div className={styles.account_name__input}>{value}%</div>
    </div>
  );
};
