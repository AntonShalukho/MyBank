import React from "react";

import classNames from "classnames";

import { CurrencyType } from "../../types";

import styles from "./Currency.module.scss";

export const Currency: React.FC<CurrencyType> = ({
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
