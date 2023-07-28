import { post } from "src/shared/api";

import { config } from "src/shared/config/apiConfig/config";

import { ResponseType, SendOfflineRegistrationType } from "../types";

export const sendOfflineRegistrationType = (
  data: SendOfflineRegistrationType
) =>
  post<ResponseType>({
    url: config.api.sendRegistrationOfflineStep,
    body: {
      ...data,
    },
  });
