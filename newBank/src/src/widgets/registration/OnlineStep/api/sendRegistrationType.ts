import { config } from "src/shared/config/apiConfig/config";

import { post } from "src/shared/api";

import {
  OnlineRegistrationResponseType,
  RegistrationTypeRequestType,
} from "../types";

export const sendRegistrationType = (body: RegistrationTypeRequestType) =>
  post<OnlineRegistrationResponseType>({
    url: config.api.sendRegistrationType,
    body: {
      ...body,
    },
  });
