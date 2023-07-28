import { post } from "src/shared/api";

import { config } from "src/shared/config/apiConfig/config";

import { SendClientProductVerifyCodeType } from "../types/apiTypes";

export const sendClientProductVerifyCode: SendClientProductVerifyCodeType = (
  data
) =>
  post({
    url: config.api.sendVerifyClientProduct,
    body: { ...data },
  });
