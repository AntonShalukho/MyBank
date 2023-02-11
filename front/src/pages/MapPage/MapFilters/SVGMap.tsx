import {
  AroundTheClock,
  CitySelectionMarker,
  Consultation,
  CurrencyExchange,
  ExoticCurrency,
  Insurance,
  OpenNow,
  Pandus,
  Payments,
  TopUp,
  TopUpWithoutCard,
  Transfer,
  Weekends,
  WithdrawCash,
} from "../../../components/Icons";

export const SVGMap = {
  aroundClock: AroundTheClock,
  consultation: Consultation,
  currencyExchange: CurrencyExchange,
  exoticCurrencyExchange: ExoticCurrency,
  insurance: Insurance,
  openNow: OpenNow,
  pandus: Pandus,
  payments: Payments,
  topUp: TopUp,
  topUpWithoutCard: TopUpWithoutCard,
  transfer: Transfer,
  weekends: Weekends,
  withdrawCash: WithdrawCash,
  selectionCityMarker: CitySelectionMarker,
};

export type SVGKeyType = keyof typeof SVGMap;
