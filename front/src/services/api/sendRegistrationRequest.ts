import { post } from ".";

import { config } from "../../config/config";

export type SendRegistrationNonClientType = {
  phoneNumber: string;
  newPassword: string;
  confirmPassword: string;
  secretQuestion: string;
  secretQuestionAnswer: string;
  verificationCode: string;
  firstName: string;
  middleName: string;
  lastName: string;
  passportNumber: string;
  isUsResident: string;
};

export type SendRegistrationClientType = {
  phoneNumber: string;
  newPassword: string;
  confirmPassword: string;
  secretQuestion: string;
  secretQuestionAnswer: string;
  verificationCode: string;
};

export type RegistrationInformationType =
  | SendRegistrationClientType
  | SendRegistrationNonClientType;

export const sendNonClientRegistration = (
  registrationInformation: SendRegistrationNonClientType
) =>
  post({
    url: config.api.registrationNonClientUrl,
    body: {
      ...registrationInformation,
    },
  });

export const sendClientRegistration = (
  registrationInformation: SendRegistrationClientType
) =>
  post({
    url: config.api.registrationClientUrl,
    body: {
      ...registrationInformation,
    },
  });
