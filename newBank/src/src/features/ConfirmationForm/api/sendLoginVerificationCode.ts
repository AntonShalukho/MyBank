import { post } from "src/shared/api";

import { config } from "src/shared/config/apiConfig/config";

import { SendLoginVerificationCodeType } from "../types/apiTypes";

export const sendLoginVerificationCode: SendLoginVerificationCodeType = (
  data
) =>
  post({
    url: config.api.sendLoginVerificationCode,
    body: { ...data },
  });
