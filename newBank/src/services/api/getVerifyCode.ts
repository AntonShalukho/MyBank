import { config } from "../../config/config";

import { get } from ".";

export const getVerifyCode = () =>
  get({
    url: config.api.getVerifyCode,
  });
