import { post } from ".";

import { config } from "../../config/config";

export type StepsType = {
  back: string;
  next: string;
};

export type SendSignUpRegistrationStepType = {
  uuid: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  repeatedPassword: string;
};

type ResponseSingUpType = {
  uuid: string;
  Step: StepsType;
};

export const sendSignUpRegistrationStep = ({
  uuid,
  name,
  surname,
  email,
  password,
  repeatedPassword,
}: SendSignUpRegistrationStepType) =>
  post<ResponseSingUpType>({
    url: config.api.sendRegistrationSignUp,
    body: {
      uuid,
      name,
      surname,
      email,
      password,
      repeatedPassword,
    },
  });
