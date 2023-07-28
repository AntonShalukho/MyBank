import { post } from "src/shared/api";

import { config } from "src/shared/config/apiConfig/config";

import { FinancialRequestType, ResponseType } from "../types";

export const sendFinancialInfo = (data: FinancialRequestType) =>
  post<ResponseType>({
    url: config.api.sendRegistrationFinancial,
    body: {
      ...data,
    },
  });
