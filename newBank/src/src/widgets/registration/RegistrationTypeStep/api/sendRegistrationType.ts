import { post } from "src/shared/api";

import { config } from "src/shared/config/apiConfig/config";

import { ResponseType, SendRegistrationType } from "../types";

export const sendRegistrationType = ({ uuid, type }: SendRegistrationType) =>
  post<ResponseType>({
    url: config.api.sendRegistrationType,
    body: {
      uuid,
      type,
    },
  });
