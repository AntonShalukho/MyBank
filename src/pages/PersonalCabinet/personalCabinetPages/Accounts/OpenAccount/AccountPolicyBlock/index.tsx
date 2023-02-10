import React from "react";

import classNames from "classnames";

import { Field, useField } from "formik";

import { useIntl } from "react-intl";

import { Link } from "react-router-dom";

import { Error } from "../../../../../../uikit/Error";

import styles from "./AccountPolicyBlock.module.css";

import { policyUrl } from "../../ListOfAccounts/constants";

type AccountPolicyBlockType = {
  isConfirm: string;
};

export const AccountPolicyBlock: React.FC<AccountPolicyBlockType> = ({
  isConfirm,
}) => {
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
              [styles.policy__unchecked_error]:
                !meta.value && meta.error && meta.touched,
            })}
          />
          <span>
            {intl.formatMessage({ id: "accountAgree" })}
            <a
              href={policyUrl}
              className={styles.policy__link}
              target="_blank"
              rel="noreferrer"
            >
              {intl.formatMessage({ id: "accountAgreeLink" })}
            </a>
          </span>
        </label>
      </div>
      <div
        className={classNames(styles.policy__error, {
          [styles.policy__error_active]: meta.error && meta.touched,
        })}
      >
        <Error errorMessageId="accountPolicyError" />
      </div>
    </div>
  );
};
