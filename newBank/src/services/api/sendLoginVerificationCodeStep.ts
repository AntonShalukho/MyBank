import { post } from ".";

import { config } from "../../config/config";

type SendVerificationCodeType = {
  uuid: string;
  code: string;
};

export type SendLoginVerificationCodeType = (
  body: SendVerificationCodeType
) => Promise<void>;

export const sendLoginVerificationCode: SendLoginVerificationCodeType = (
  body
) =>
  post({
    url: config.api.sendLoginVerificationCode,
    body: { ...body },
  });
