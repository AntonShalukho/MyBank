import { post } from ".";

import { config } from "../../config/config";

type SendVerificationPassportNumberRequestType = {
  passportNumber: string;
};

export const sendVerificationPassportNumberRequest = (
  values: SendVerificationPassportNumberRequestType
) =>
  post({
    url: config.api.passportNumberUrl,
    auth: false,
    body: values,
  });
