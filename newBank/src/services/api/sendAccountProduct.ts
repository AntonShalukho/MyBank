import { post } from ".";

import { config } from "../../config/config";

type CurrencyType = {
  name: string;
};

export type AccountProductInformationType = {
  bankProductName: string;
  accountName: string;
  currency: CurrencyType;
  verifyCode: string;
};

export const sendAccountProduct = (
  accountProductInformation: AccountProductInformationType
) =>
  post({
    url: config.api.setAccountProduct,
    body: { ...accountProductInformation },
  });
