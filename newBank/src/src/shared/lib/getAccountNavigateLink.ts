import { PRODUCTS_ACCOUNT_PATH } from "../consts/accounts";

export const getAccountNavigateLink = (step: string): string =>
  `${PRODUCTS_ACCOUNT_PATH}/${step}`;
