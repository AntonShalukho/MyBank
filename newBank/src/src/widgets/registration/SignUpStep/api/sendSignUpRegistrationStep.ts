import { post } from "src/shared/api";

import { config } from "src/shared/config/apiConfig/config";

import { SignUpRequestType, ResponseType } from "../types";

export const sendSignUpRegistrationStep = ({
  uuid,
  name,
  surname,
  email,
  password,
}: SignUpRequestType) =>
  post<ResponseType>({
    url: config.api.sendRegistrationSignUp,
    body: {
      uuid,
      name,
      surname,
      email,
      password,
    },
  });
