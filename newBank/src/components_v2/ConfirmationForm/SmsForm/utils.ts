import {
  SendClientProductVerifyCodeType,
  sendClientProductVerifyCode,
} from "services/api/sendClientProductVerifyCode";

import {
  sendLoginVerificationCode,
  SendLoginVerificationCodeType,
} from "services/api/sendLoginVerificationCodeStep";

import {
  ResponseType,
  SendVerificationEmailCodeType,
  sendVerificationEmailCode,
} from "services/api/sendVerificationEmailCode";

import {
  LOG_IN_PATH,
  PRODUCTS_ACCOUNT_CURRENT_PATH,
  PRODUCTS_ACCOUNT_SAVING_PATH,
} from "utils/variables";

export type InitialValuesType = {
  firstInput: string;
  secondInput: string;
  thirdInput: string;
  fourthInput: string;
  fifthInput: string;
  sixthInput: string;
};

export type SmsFormType = {
  onClose: () => void;
  handleSuccessResponse: (data?: ResponseType) => void;
  resendVerifyCode: () => void;
};

export const initialValues: InitialValuesType = {
  firstInput: "",
  secondInput: "",
  thirdInput: "",
  fourthInput: "",
  fifthInput: "",
  sixthInput: "",
};

export const getConfirmationCode = (values: InitialValuesType): string =>
  Object.values(values).join("");

type VerifyCodeHandlerType = (
  pathname: string
) =>
  | SendClientProductVerifyCodeType
  | SendLoginVerificationCodeType
  | SendVerificationEmailCodeType;

export const getVerifyHandler: VerifyCodeHandlerType = (pathname) => {
  switch (pathname) {
    case LOG_IN_PATH:
      return sendLoginVerificationCode;
    case PRODUCTS_ACCOUNT_SAVING_PATH:
      return sendClientProductVerifyCode;
    case PRODUCTS_ACCOUNT_CURRENT_PATH:
      return sendClientProductVerifyCode;
    default:
      return sendVerificationEmailCode;
  }
};
