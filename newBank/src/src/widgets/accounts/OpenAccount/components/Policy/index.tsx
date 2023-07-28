import React from "react";

import classNames from "classnames";

import { Field, useField } from "formik";

import { useIntl } from "react-intl";

import { Error } from "src/shared/ui/Error";

import { POLICY_URL } from "src/shared/consts/accounts";

import { PolicyType } from "../../types";

import styles from "./Policy.module.scss";

export const Policy: React.FC<PolicyType> = ({ isConfirm }) => {
  const intl = useIntl();
  const [field, meta, helpers] = useField(isConfirm);

  return (
    <div className={styles.policy}>
      <div className={styles.policy__wrapper}>
        <label>
          <Field
            name={isConfirm}
            type="checkbox"
            className={classNames({
              [styles.policy__checked]: !meta.value,
              [styles.policy__unchecked]: meta.value,
            })}
          />
          <span>
            {intl.formatMessage({ id: "widget_accountAgree" })}
            <a
              href={POLICY_URL}
              className={styles.policy__link}
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              {intl.formatMessage({ id: "widget_accountAgreeLink" })}
            </a>
          </span>
        </label>
      </div>
      <div
        className={classNames(styles.policy__error, {
          [styles.policy__error_active]: meta.error && meta.touched,
        })}
      >
        <Error errorMessageId="widget_PolicyError" />
      </div>
    </div>
  );
};
