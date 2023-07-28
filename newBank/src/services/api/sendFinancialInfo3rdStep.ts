import { post } from ".";

import { config } from "../../config/config";

import { StepTwoType } from "./getInitialRegistrationStep";

export type FinancialTypeDescription = {
  uuid: string;
  pesel: string;
  documentType: string;
  documentID: string;
  documentExpirationDate: string;
};

type ResponseType = {
  uuid: string;
  Step: StepTwoType;
};

export const sendFinancialInfo = (data: FinancialTypeDescription) =>
  post<ResponseType>({
    url: config.api.sendRegistrationFinancial,
    body: {
      ...data,
    },
  });
