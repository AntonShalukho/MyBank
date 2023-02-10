import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router";

import { FormattedMessage } from "react-intl";

import { BackButton } from "../../components/BackButton";

import { Table } from "./Table";

import { CurrencyConverter } from "./CurrencyConverter";

import {
  sendExchangeRatesRequest,
  CurrencyMapType,
} from "../../services/api/sendExchangeRatesRequest";

import { SELL_RATE_MULTIPLIER } from "./constants";

import "./ExchangeRatesPageStyles.css";

export const ExchangeRatesPage = () => {
  const [rates, setRates] = useState<CurrencyMapType | undefined>();
  const date = new Date().toISOString().slice(0, 10);
  const navigate = useNavigate();

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

  useEffect(() => {
    sendExchangeRatesRequest(date).then((data) => setRates(data.currencyRates));
  }, [date]);

  return (
    <>
      <div className="exchange-rates-page-body">
        <div className="exchange-rates-navigation">
          <BackButton onClick={() => navigate(-1)} />
        </div>
        <div />
        <div className="exchange-rates-content">
          <div className="exchange-rates-table-block">
            <h2 className="exchange-rates-heading">
              <FormattedMessage id="exchangeRates" />
            </h2>
            <Table rates={tableRates} />
          </div>
          <div className="exchange-rates-currency-converter-block">
            <div>
              <h2 className="exchange-rates-heading">
                <FormattedMessage id="converterBuying" />
              </h2>
              <CurrencyConverter rates={rates} />
            </div>
            <div>
              <h2 className="exchange-rates-heading">
                <FormattedMessage id="converterSelling" />
              </h2>
              <CurrencyConverter
                rates={rates}
                multiplier={SELL_RATE_MULTIPLIER}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
