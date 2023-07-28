import { SIGN_UP_PATH } from "../consts/Registration";

export const getSignUpNavigateLink = (step: string): string =>
  `${SIGN_UP_PATH}/${step}`;
