import {
  Home,
  Card,
  Accounts,
  Loans,
  More,
  Deposits,
  TransfersIcon,
  Investing,
  InsuranceIcon,
  DealsAndOffers,
} from "../../../../components_v2/Icon";

export const SVGMobileBar = {
  mainPage: Home,
  cards: Card,
  accounts: Accounts,
  loans: Loans,
  more: More,
  deposits: Deposits,
  transfers: TransfersIcon,
  investing: Investing,
  insurance: InsuranceIcon,
  dealsAndOffers: DealsAndOffers,
};

export type SVGKeyType = keyof typeof SVGMobileBar;
