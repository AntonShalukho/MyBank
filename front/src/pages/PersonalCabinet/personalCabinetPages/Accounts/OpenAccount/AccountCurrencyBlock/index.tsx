import React from "react";

import { useField } from "formik";

import { useIntl } from "react-intl";

import { AccountCurrency } from "../AccountCurrency";

import { CurrencyMockData } from "../AccountMockData";

import { PLN, EUR, USD } from "../../../../../../components/Icons";

import styles from "./AccountCurrencyBlock.module.css";

type AccountCurrencyBlockType = {
  currency: string;
  interest: string;
};

export const AccountCurrencyBlock: React.FC<AccountCurrencyBlockType> = ({
  currency,
  interest,
}) => {
  const intl = useIntl();
  const [currencyField, currencyMeta, currencyHelpers] = useField(currency);
  const [interestField, interestMeta, interestHelpers] = useField(interest);
  const currencyMap = {
    PLN: <PLN className={styles.currency_block__icon} />,
    USD: <USD className={styles.currency_block__icon} />,
    EUR: <EUR className={styles.currency_block__icon} />,
  };

  const onClick = (currency: string) => {
    const interest = CurrencyMockData.find(
      (data) => data.currency === currency
    )?.interest;

    currencyHelpers.setValue({ name: currency, picture_link: "" });
    interestHelpers.setValue(interest);
  };

  return (
    <div>
      <div className={styles.currency_title}>
        {intl.formatMessage({ id: "accountCurrency" })}
      </div>
      <div className={styles.currency_block}>
        {CurrencyMockData.map((currency) => (
          <AccountCurrency
            key={currency.currency}
            currencyName={currency.currency}
            isActive={currencyMeta.value.name === currency.currency}
            onClick={onClick}
          >
            {currencyMap[currency.currency as keyof typeof currencyMap]}
          </AccountCurrency>
        ))}
      </div>
    </div>
  );
};
