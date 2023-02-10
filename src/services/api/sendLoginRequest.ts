import { post } from ".";

import { config } from "../../config/config";

export type SendLoginRequestType = {
  jwtToken: string;
  role: string[];
};

export const sendLoginRequest = (
  login: string,
  password: string,
  type: string
) =>
  post<SendLoginRequestType>({
    url: config.api.loginRequestUrl,
    body: { login, password },
    requestHeaders: { "Authorization-Method": type },
  });
