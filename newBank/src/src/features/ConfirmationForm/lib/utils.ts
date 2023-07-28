import {
  LOG_IN_PATH,
  PRODUCTS_ACCOUNT_CURRENT_PATH,
  PRODUCTS_ACCOUNT_SAVING_PATH,
} from "src/shared/consts/accounts";

import { sendClientProductVerifyCode } from "../api/sendClientProductVerifyCode";

import { sendLoginVerificationCode } from "../api/sendLoginVerificationCode";

import { sendVerificationEmailCode } from "../api/sendVerificationEmailCode";

import { InitialEmailFormType } from "../types";

import { VerifyCodeHandlerType } from "../types/apiTypes";

export const getConfirmationCode = (values: InitialEmailFormType): string =>
  Object.values(values).join("");

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
