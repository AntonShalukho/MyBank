import { config } from "src/shared/config/apiConfig/config";

import { get } from "src/shared/api";

import { GetAccountDetailsType } from "../types/apiTypes";

export const getAccountDetails: GetAccountDetailsType = (id) =>
  get({
    url: `${config.api.getAccountDetails}${id}`,
  });
