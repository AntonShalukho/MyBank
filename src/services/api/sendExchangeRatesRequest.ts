import { get } from ".";

import { config } from "../../config/config";

export type CurrencyType = {
  currency: string;
  rate: string;
};

export type CurrencyMapType = {
  [currencyName: string]: CurrencyType[];
};

export type ExchangeRatesType = {
  currencyRates: CurrencyMapType;
};

export const sendExchangeRatesRequest = (date: string) =>
  get<ExchangeRatesType>({ url: `${config.api.exchangeRatesUrl}${date}` });
