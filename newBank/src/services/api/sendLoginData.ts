import { post } from ".";

import { config } from "../../config/config";

export type StepsType = {
  back: string;
  next: string;
};

export type SendLoginDataType = {
  email: string;
  password: string;
};

type ResponseType = {
  uuid: string;
  Step: StepsType;
};

export const sendLoginData = ({ email, password }: SendLoginDataType) =>
  post<ResponseType>({
    url: config.api.sendLoginData,
    body: {
      email,
      password,
    },
  });
