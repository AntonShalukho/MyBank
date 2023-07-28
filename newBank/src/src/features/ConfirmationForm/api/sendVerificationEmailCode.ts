import { post } from "src/shared/api";

import { config } from "src/shared/config/apiConfig/config";

import { SendVerificationEmailCodeType } from "../types/apiTypes";

export const sendVerificationEmailCode: SendVerificationEmailCodeType = (
  data
) =>
  post({
    url: config.api.sendRegistrationVerifyCode,
    body: { ...data },
  });
