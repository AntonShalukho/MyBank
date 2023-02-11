import React, { ReactNode } from "react";

import classNames from "classnames";

import styles from "./AccountCurrency.module.css";

type AccountCurrencyType = {
  currencyName: string;
  children: ReactNode;
  isActive: boolean;
  onClick(currency: string): void;
};

export const AccountCurrency: React.FC<AccountCurrencyType> = ({
  currencyName,
  children,
  isActive,
  onClick,
}) => {
  const onClickHandler = () => {
    onClick(currencyName);
  };

  return (
    // eslint-disable-next-line
    <div 
      className={classNames(styles.wrapper, {
        [styles.wrapper_active]: isActive,
      })}
      onClick={onClickHandler}
    >
      {children}
      <span className={styles.currency}>{currencyName}</span>
    </div>
  );
};
