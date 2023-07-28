import React from "react";

import { useIntl } from "react-intl";

import styles from "./Error.module.scss";

type ErrorProps = {
  errorMessageId: string;
};

export const Error = ({ errorMessageId }: ErrorProps) => {
  const intl = useIntl();

  return (
    <p className={styles.input_error_text}>
      {intl.formatMessage({ id: errorMessageId })}
    </p>
  );
};
