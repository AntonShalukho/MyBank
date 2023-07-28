import { config } from "src/shared/config/apiConfig/config";

import { get } from "src/shared/api";

import { ListOfAccountRequestType } from "../types/apiTypes";

export const getListOfAccounts: ListOfAccountRequestType = () =>
  get({
    url: config.api.getClientProducts,
  });
