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

export type SendClientProductVerifyCodeType = (
  body: SendVerificationCodeType
) => Promise<ResponseType>;

export const sendClientProductVerifyCode: SendClientProductVerifyCodeType = (
  body
) =>
  post({
    url: config.api.sendVerifyClientProduct,
    body: { ...body },
  });
