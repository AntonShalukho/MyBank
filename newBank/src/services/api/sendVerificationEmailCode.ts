import { post } from ".";

import { config } from "../../config/config";

import { StepsType } from "./sendSignUpRegistrationStep";

type SendVerificationCodeType = {
  uuid: string;
  code: string;
};

export type ResponseType = {
  uuid: string;
  Step: StepsType;
};

export type SendVerificationEmailCodeType = (
  body: SendVerificationCodeType
) => Promise<ResponseType>;

export const sendVerificationEmailCode: SendVerificationEmailCodeType = (
  body
) =>
  post({
    url: config.api.sendRegistrationVerifyCode,
    body: { ...body },
  });
