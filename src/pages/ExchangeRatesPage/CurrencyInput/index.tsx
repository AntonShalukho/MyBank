import React, { InputHTMLAttributes } from "react";

import { useIntl } from "react-intl";

import { Input } from "../../../uikit/Input";

import "./CurrencyInputStyles.css";

export interface CurrencyInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  currency?: string;
}

export const CurrencyInput = ({
  name,
  currency,
  ...props
}: CurrencyInputProps) => {
  const intl = useIntl();

  return (
    <div className="currency-text">
      <span className="currency-symbol">{currency}</span>
      <Input
        name={name}
        label={intl.formatMessage({ id: "price" })}
        className="currency-input"
        {...props}
      />
    </div>
  );
};
