import {
  Home,
  Card,
  Accounts,
  Loans,
  Deposits,
  Investing,
  Transfer,
  InsuranceIcon,
  DealsAndOffers,
} from "../../../components/Icons";

export const SVGSidebar = {
  mainPage: Home,
  cards: Card,
  accounts: Accounts,
  loans: Loans,
  deposits: Deposits,
  transfers: Transfer,
  investing: Investing,
  insurance: InsuranceIcon,
  dealsAndOffers: DealsAndOffers,
};

export type SVGKeyType = keyof typeof SVGSidebar;
