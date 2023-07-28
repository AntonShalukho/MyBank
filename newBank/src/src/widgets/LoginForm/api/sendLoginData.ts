import { post } from "src/shared/api";

import { config } from "src/shared/config/apiConfig/config";

import { ResponseType, SendLoginDataType } from "../types";

export const sendLoginData = ({ email, password }: SendLoginDataType) =>
  post<ResponseType>({
    url: config.api.sendLoginData,
    body: {
      email,
      password,
    },
  });
