import React from "react";

import { EUR, USD, GBP, PLN, CHF } from "../../components/Icons";

type IconsType = { [index: string]: JSX.Element };

export const icons: IconsType = {
  EUR: <EUR />,
  USD: <USD />,
  GBP: <GBP />,
  PLN: <PLN />,
  CHF: <CHF />,
};

export const SELL_RATE_MULTIPLIER = 1.1;
