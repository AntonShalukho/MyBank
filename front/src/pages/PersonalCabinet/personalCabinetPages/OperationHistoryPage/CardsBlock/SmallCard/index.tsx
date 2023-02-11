import React from "react";

import { LogoIcon, Dots } from "../../../../../../components/Icons";

import "./SmallCardStyles.css";

type SmallCardTypes = {
  tariff: string;
  displayNumber: string;
  expirationDate: string;
  balance: number | string;
  currency: string;
  paymentSystemIcon: JSX.Element;
};

const cardTypes: Record<string, string> = {
  "Mastercard Polybank": "master-card-polybank",
  "Visa Infinite": "visa-infinite",
  "Mastercard Premium": "mastercard-premium",
  "Visa Purchase Plus": "visa-purchase-plus",
  "Visa Smart Payout": "visa-smart-payout",
};

export const SmallCard = ({
  tariff,
  displayNumber,
  expirationDate,
  balance,
  currency,
  paymentSystemIcon,
}: SmallCardTypes) => {
  const modifyCardTitle = (tariff: string) => {
    const tariffArr = tariff.split(" ");
    if (tariffArr[0] === "Visa" || tariffArr[0] === "Mastercard") {
      tariffArr.shift();
      tariffArr.join(" "); //! не ставит пробел
      return tariffArr;
    }
    return tariff;
  };
  return (
    <div className={`small-card-wrapper ${cardTypes[tariff]}`}>
      <div>
        <h2 className="small-card-tariff-title">{modifyCardTitle(tariff)}</h2>
        <div className="small-card-dots-wrapper">
          <div className="small-card-dots-wrapper">
            <Dots />
          </div>
          <div className="small-card-dots-wrapper">
            <Dots />
          </div>
          <div className="small-card-dots-wrapper">
            <Dots />
          </div>
          <div className="small-card-number-card">{displayNumber}</div>
        </div>
        <div className="small-card-expiration-date">{expirationDate}</div>
        <div className="small-card-balance-wrapper">
          <div className="small-card-balance">{balance}</div>
          <div className="small-card-currency">{currency}</div>
        </div>
        <div />
      </div>
      <LogoIcon className="small-card-bank-logo" />
      <div className="small-payment-system-icon">{paymentSystemIcon}</div>
    </div>
  );
};
