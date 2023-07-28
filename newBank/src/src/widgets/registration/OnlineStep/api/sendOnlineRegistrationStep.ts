import { config } from "src/shared/config/apiConfig/config";

import { post } from "src/shared/api";

import {
  OnlineRegistrationRequestType,
  OnlineRegistrationResponseType,
} from "../types";

export const sendOnlineRegistrationStep = ({
  uuid,
}: OnlineRegistrationRequestType) =>
  post<OnlineRegistrationResponseType>({
    url: config.api.sendOnlineRegistrationStep,
    body: {
      uuid,
    },
  });
