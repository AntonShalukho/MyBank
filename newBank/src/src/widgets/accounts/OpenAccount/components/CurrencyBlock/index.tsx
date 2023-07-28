import React from "react";

import { useField } from "formik";

import { useIntl } from "react-intl";

import { CurrencyIcon } from "src/shared/ui/CurrencyIcon";

import { CurrencyMockData } from "../../moke/CurrencyMockData";

import { Currency } from "../Currency";

import { CurrencyMockDataType } from "../../types";

import styles from "./CurrencyBlock.module.scss";

export const CurrencyBlock: React.FC<CurrencyMockDataType> = ({
  currency,
  interest,
}) => {
  const intl = useIntl();
  const [currencyField, currencyMeta, currencyHelpers] = useField(currency);
  const [interestField, interestMeta, interestHelpers] = useField(interest);

  const onClick = (currency: string) => {
    const interest = CurrencyMockData.find(
      (data) => data.currency === currency
    )?.interest;

    currencyHelpers.setValue(currency);
    interestHelpers.setValue(interest);
  };

  return (
    <div>
      <div className={styles.currency_title}>
        {intl.formatMessage({ id: "widget_currency" })}
      </div>
      <div className={styles.currency_block}>
        {CurrencyMockData.map((currency) => (
          <Currency
            key={currency.currency}
            currencyName={currency.currency}
            isActive={currencyMeta.value === currency.currency}
            onClick={onClick}
          >
            <CurrencyIcon currency={currency.currency} />
          </Currency>
        ))}
      </div>
    </div>
  );
};
