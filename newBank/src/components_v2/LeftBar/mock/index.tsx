import {
  ACCOUNTS_INTL_ID,
  AUTO_PAYMENTS_INTL_ID,
  CARDS_INTL_ID,
  CURRENCY_EXCHANGE_INTL_ID,
  DEPOSITS_INTL_ID,
  INVESTMENTS_INTL_ID,
  LOANS_INTL_ID,
  MAIN_PAGE_INTL_ID,
  OFFERS_ACCOUNT_PATH,
  OFFERS_CARDS_PATH,
  OFFERS_CURRENCY_EXCHANGE_PATH,
  OFFERS_INTL_ID,
  OFFERS_INVESTMENTS_PATH,
  OFFERS_LOANS_PATH,
  OFFERS_PATH,
  PAYMENTS_AUTO_PAYMENTS_PATH,
  PAYMENTS_INTL_ID,
  PAYMENTS_PATH,
  PAYMENTS_RECIPIENTS_PATH,
  PAYMENTS_TRANSFERS_PATH,
  PRODUCTS_ACCOUNT_PATH,
  PRODUCTS_CARDS_PATH,
  PRODUCTS_DEPOSITS_PATH,
  PRODUCTS_INTL_ID,
  PRODUCTS_LOANS_PATH,
  PRODUCTS_PATH,
  RECIPIENTS_INTL_ID,
  SETTINGS_INTL_ID,
  SETTINGS_PATH,
  TRANSFERS_INTL_ID,
} from "utils/consts/leftBarConsts";

import { LeftBarDataType, SubLinksType } from "../types";

import { ProductPageIcon } from "../components/ProductPageIcon";

import { MainPageIcon } from "../components/MainPageIcon";

import { AccountsIcon } from "../components/AccountsIcon";

import { CardsIcon } from "../components/CardsIcon";

import { DepositsIcon } from "../components/DepositsIcon";

import { LoansIcon } from "../components/LoansIcon";

import { TransfersIcon } from "../components/TransfersIcon";

import { RecipientsIcon } from "../components/RecipientsIcon";

import { AutoPaymentsIcon } from "../components/AutoPaymentsIcon";

import { PaymentIcon } from "../components/PaymentIcon";

import { OffersIcon } from "../components/OffersIcon";

import { CurrencyExchange } from "../components/CurrencyExchange";

import { SettingsIcon } from "../components/SettingsIcon";

const productPageMap: SubLinksType[] = [
  {
    title: ACCOUNTS_INTL_ID,
    path: PRODUCTS_ACCOUNT_PATH,
    icon: <AccountsIcon />,
  },
  {
    title: CARDS_INTL_ID,
    path: PRODUCTS_CARDS_PATH,
    icon: <CardsIcon />,
  },
  {
    title: DEPOSITS_INTL_ID,
    path: PRODUCTS_DEPOSITS_PATH,
    icon: <DepositsIcon />,
  },
  {
    title: LOANS_INTL_ID,
    path: PRODUCTS_LOANS_PATH,
    icon: <LoansIcon />,
  },
];

const paymentsMap: SubLinksType[] = [
  {
    title: TRANSFERS_INTL_ID,
    path: PAYMENTS_TRANSFERS_PATH,
    icon: <TransfersIcon />,
  },
  {
    title: RECIPIENTS_INTL_ID,
    path: PAYMENTS_RECIPIENTS_PATH,
    icon: <RecipientsIcon />,
  },
  {
    title: AUTO_PAYMENTS_INTL_ID,
    path: PAYMENTS_AUTO_PAYMENTS_PATH,
    icon: <AutoPaymentsIcon />,
  },
];

const offersMap: SubLinksType[] = [
  {
    title: LOANS_INTL_ID,
    path: OFFERS_LOANS_PATH,
    icon: <LoansIcon />,
  },
  {
    title: ACCOUNTS_INTL_ID,
    path: OFFERS_ACCOUNT_PATH,
    icon: <AccountsIcon />,
  },
  {
    title: CARDS_INTL_ID,
    path: OFFERS_CARDS_PATH,
    icon: <CardsIcon />,
  },
  {
    title: INVESTMENTS_INTL_ID,
    path: OFFERS_INVESTMENTS_PATH,
    icon: <DepositsIcon />,
  },
  {
    title: CURRENCY_EXCHANGE_INTL_ID,
    path: OFFERS_CURRENCY_EXCHANGE_PATH,
    icon: <CurrencyExchange />,
  },
];

export const leftBarMockData: LeftBarDataType[] = [
  {
    title: MAIN_PAGE_INTL_ID,
    path: "/",
    icon: <MainPageIcon />,
    subLinks: [],
  },
  {
    title: PRODUCTS_INTL_ID,
    path: PRODUCTS_PATH,
    icon: <ProductPageIcon />,
    subLinks: productPageMap,
  },
  {
    title: PAYMENTS_INTL_ID,
    path: PAYMENTS_PATH,
    icon: <PaymentIcon />,
    subLinks: paymentsMap,
  },
  {
    title: OFFERS_INTL_ID,
    path: OFFERS_PATH,
    icon: <OffersIcon />,
    subLinks: offersMap,
  },
  {
    title: SETTINGS_INTL_ID,
    path: SETTINGS_PATH,
    icon: <SettingsIcon />,
    subLinks: [],
  },
];
