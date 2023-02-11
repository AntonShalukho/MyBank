import React from "react";

import { useIntl } from "react-intl";

import "./ErrorStyles.css";

type ErrorProps = {
  errorMessageId: string;
};

export const Error = ({ errorMessageId }: ErrorProps) => {
  const intl = useIntl();

  return (
    <p className="input-error-text">
      {intl.formatMessage({ id: errorMessageId })}
    </p>
  );
};
