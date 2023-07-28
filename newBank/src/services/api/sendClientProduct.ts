import { post } from ".";

import { config } from "../../config/config";

import { StepsType } from "./sendSignUpRegistrationStep";

type CurrencyType = {
  name: string;
  picture_link: string;
};

export type ClientProductRequestType = {
  id: string;
  bankProductName: string;
  accountName: string;
  currency: CurrencyType;
};

export type ResponseType = string;

export type ClientProductServiceType = (
  body: ClientProductRequestType
) => Promise<ResponseType>;

export const sendClientProduct: ClientProductServiceType = (body) =>
  post({
    url: config.api.sendClientProduct,
    body: { ...body },
  });
