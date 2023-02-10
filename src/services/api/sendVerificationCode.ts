import { post } from ".";

import { config } from "../../config/config";

type SendVerificationCodeType = {
  verificationCode: string;
  phoneNumber: string;
};

export const sendVerificationCode = ({
  verificationCode,
  phoneNumber,
}: SendVerificationCodeType) =>
  post({
    url: config.api.verificationCodeUrl,
    body: {
      verificationCode,
      phoneNumber,
    },
  });
