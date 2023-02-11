import { config } from "../../config/config";

import { get } from ".";

import { CurrencyType } from "./getListOfAccounts";

export type AccountDetailsType = {
  id: number;
  bankProductName: string;
  iban: string;
  accountName: string;
  currency: CurrencyType;
  balance: string;
  interest: string;
  openDate: string;
};

export type LoanResponseType = {
  data: AccountDetailsType;
  error?: Error;
};

export const getAccountDetails = (id: number) =>
  get<AccountDetailsType>({
    url: `${config.api.getAccountDetails}${id}`,
  });
