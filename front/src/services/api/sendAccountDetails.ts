import { put } from ".";

import { config } from "../../config/config";

import { CurrencyType } from "./getListOfAccounts";

export type AccountDetailsInformationType = {
  id: number;
  bankProductName: string;
  iban: string;
  accountName: string;
  currency: CurrencyType;
  balance: string;
  interest: string;
  openDate: string;
};

export const sendAccountDetails = (
  accountDetailsInformation: AccountDetailsInformationType
) =>
  put<AccountDetailsInformationType>({
    url: config.api.setAccountDetails,
    body: { ...accountDetailsInformation },
  });
