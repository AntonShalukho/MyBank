import { config } from "src/shared/config/apiConfig/config";

import { post } from "src/shared/api";

import { SendRegistrationCourierType } from "../types";

export const sendRegistrationCourierStep: SendRegistrationCourierType = (
  data
) =>
  post({
    url: config.api.sendRegistrationCourier,
    body: {
      ...data,
    },
  });
