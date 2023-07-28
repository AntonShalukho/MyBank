import { config } from "config/config";

import { post } from "../../../services/api";

export const sendInvalidate = () =>
  post({
    url: config.api.sendInvalidate,
  });
