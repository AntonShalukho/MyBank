import { post } from ".";

import { config } from "../../config/config";

type RecoveryInformationType = {
  confirmPassword: string;
  newPassword: string;
  passportNumber: string;
  verificationCode: string;
};

export const sendPasswordRecoveryRequest = (
  recoveryInformation: RecoveryInformationType
) =>
  post({
    url: config.api.passwordRecoveryUrl,
    body: { ...recoveryInformation },
  });
