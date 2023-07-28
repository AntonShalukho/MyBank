import { config } from "src/shared/config/apiConfig/config";

import { post } from "src/shared/api";

import { SendFinalAgreementType } from "../types";

export const sendFinalAgreement: SendFinalAgreementType = (data) =>
  post({
    url: config.api.sendRegistrationFinal,
    body: {
      ...data,
    },
  });
