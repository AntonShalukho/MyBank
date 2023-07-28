import { config } from "src/shared/config/apiConfig/config";

import { put } from "src/shared/api";

import { SendAccountDetailsType } from "../types/apiTypes";

export const sendAccountDetails: SendAccountDetailsType = (data) =>
  put({
    url: config.api.setAccountDetails,
    body: { ...data },
  });
