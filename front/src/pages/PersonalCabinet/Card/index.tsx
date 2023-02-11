import React from "react";

import { LogoIcon } from "../../../components/Icons";

import "./CardStyle.css";

type CardTypes = {
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

export const Card = ({
  tariff,
  displayNumber,
  expirationDate,
  balance,
  currency,
  paymentSystemIcon,
}: CardTypes) => (
  <div className={`card-wrapper ${cardTypes[tariff]}`}>
    <div>
      <h2 className="card-tariff-title">{tariff}</h2>
      <div className="card-dots-wrapper">
        <div className="card-dots-wrapper">&#9679; &#9679; &#9679; &#9679;</div>
        <div className="card-dots-wrapper">&#9679; &#9679; &#9679; &#9679;</div>
        <div className="card-dots-wrapper">&#9679; &#9679; &#9679; &#9679;</div>
        <div className="card-number-card">{displayNumber}</div>
      </div>
      <div className="card-expiration-date">{expirationDate}</div>
      <div className="card-balance-wrapper">
        <div className="card-balance">{balance}</div>
        <div className="card-currency">{currency}</div>
      </div>
      <div />
    </div>
    <LogoIcon className="card-bank-logo" />
    <div className="payment-system-icon">{paymentSystemIcon}</div>
  </div>
);
