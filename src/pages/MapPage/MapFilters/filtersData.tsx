import React from "react";

import { FilterData } from "../../../redux/types/mapTypes";

export const filtersData: FilterData[] = [
  {
    headerId: "services",
    filters: [
      { nameId: "transfer", backendKey: "Transfer" },
      { nameId: "payments", backendKey: "Payments" },
      { nameId: "topUp", backendKey: "Top up" },
      {
        nameId: "currencyExchange",
        backendKey: "Currency exchange",
      },
      {
        nameId: "withdrawCash",
        backendKey: "Withdraw cash",
      },
      {
        nameId: "topUpWithoutCard",
        backendKey: "Top up without card",
      },
    ],
  },
  {
    headerId: "operationMode",
    filters: [
      {
        nameId: "weekends",
        backendKey: "sundayWorkingMode",
      },
      { nameId: "openNow", backendKey: "openNow" },
      {
        nameId: "aroundClock",
        backendKey: "aroundClock",
      },
    ],
  },
  {
    headerId: "extraServices",
    filters: [
      { nameId: "pandus", backendKey: "Pandus" },
      {
        nameId: "exoticCurrencyExchange",
        backendKey: "Exotic currency exchange",
      },
      {
        nameId: "consultation",
        backendKey: "Consultation",
      },
      { nameId: "insurance", backendKey: "Insurance" },
    ],
  },
];
