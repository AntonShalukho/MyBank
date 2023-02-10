import { post } from ".";

import { config } from "../../config/config";

import { CurrencyType } from "./getListOfAccounts";

export type AccountProductInformationType = {
  bankProductName: string;
  accountName: string;
  currency: CurrencyType;
};

export const sendAccountProduct = (
  accountProductInformation: AccountProductInformationType
) =>
  post({
    url: config.api.setAccountProduct,
    body: { ...accountProductInformation },
  });
