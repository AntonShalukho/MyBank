import { SIGN_UP_PATH } from "../../../../utils/variables";

export const getSignUpNavigateLink = (step: string): string =>
  `${SIGN_UP_PATH}/${step}`;
