import React, { useEffect, useState } from "react";

import {
  CurrencyMapType,
  sendExchangeRatesRequest,
} from "../../../services/api/sendExchangeRatesRequest";

import { SELL_RATE_MULTIPLIER } from "../../ExchangeRatesPage/constants";

import { Table } from "../../ExchangeRatesPage/Table";

import "./ExchangeRatesStyles.css";

export const ExchangeRates = () => {
  const [rates, setRates] = useState<CurrencyMapType | undefined>();
  const date = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    sendExchangeRatesRequest(date).then((data) => setRates(data.currencyRates));
  }, [date]);

  const formatRateBuying = (rate: string) =>
    (Math.round(parseFloat(rate) * 100) / 100).toFixed(2);

  const formatRateSelling = (rate: string) =>
    (Math.round(parseFloat(rate) * SELL_RATE_MULTIPLIER * 100) / 100).toFixed(
      2
    );

  const tableRates =
    rates &&
    rates.EUR.map((elem) => [
      elem.currency,
      formatRateBuying(elem.rate),
      formatRateSelling(elem.rate),
    ]);

  return (
    <div className="exchange-rates-wrapper">
      {tableRates && <Table rates={tableRates} />}
    </div>
  );
};
