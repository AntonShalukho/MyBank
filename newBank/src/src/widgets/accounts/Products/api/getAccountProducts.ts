import { config } from "src/shared/config/apiConfig/config";

import { get } from "src/shared/api";

import { AccountProductsRequestType } from "../types";

export const getAccountProducts: AccountProductsRequestType = () =>
  get({
    url: config.api.getAccountProducts,
  });
