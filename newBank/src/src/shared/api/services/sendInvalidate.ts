import { post } from "..";

import { config } from "../../config/apiConfig/config";

export const sendInvalidate = () =>
  post({
    url: config.api.sendInvalidate,
  });
