import { post } from ".";

import { config } from "../../config/config";

import { StepTwoType } from "./getInitialRegistrationStep";

export type FinalAgreementType = {
  uuid: string;
  agreement: boolean;
};

type ResponseType = {
  uuid: string;
  Step: StepTwoType;
};

export const sendFinalAgreement = (data: FinalAgreementType) =>
  post<ResponseType>({
    url: config.api.sendRegistrationFinal,
    body: {
      ...data,
    },
  });
