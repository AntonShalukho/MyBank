import React from "react";

import { EUR } from "src/shared/assets/icons/components/EUR";

import { PLN } from "src/shared/assets/icons/components/PLN";

import { USD } from "src/shared/assets/icons/components/USD";

import styles from "./CurrencyIcon.module.scss";

export type CurrencyIconType = {
  currency: string;
};

export const CurrencyIcon = ({ currency }: CurrencyIconType) => {
  const currencyMap = {
    PLN: <PLN className={styles.currency_block__icon} />,
    USD: <USD className={styles.currency_block__icon} />,
    EUR: <EUR className={styles.currency_block__icon} />,
  };
  return <>{currencyMap[currency as keyof typeof currencyMap]}</>;
};
