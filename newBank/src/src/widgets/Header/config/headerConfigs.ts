import {
  MAIN_PAGE_INTL_ID,
  MAIN_PAGE_PATH,
} from "../../../shared/consts/MainPage";

import {
  PRODUCTS_ACCOUNT_CURRENT_PATH,
  PRODUCTS_ACCOUNT_DETAILS_PATH,
  PRODUCTS_ACCOUNT_LIST_PATH,
  PRODUCTS_ACCOUNT_PATH,
  PRODUCTS_ACCOUNT_SAVING_PATH,
  PRODUCTS_PATH,
  PRODUCTS_INTL_ID,
} from "../../../shared/consts/ProductsPage";

export const getDirectionConfig = (pathname: string): string => {
  if (pathname === MAIN_PAGE_PATH) {
    return PRODUCTS_PATH;
  }
  return PRODUCTS_PATH;
};

export const getContentConfig = (pathname: string): string => {
  if (pathname === MAIN_PAGE_PATH) {
    return "+ Open product";
  }
  return "+ Open product";
};

export const getTitleConfig = (pathname: string): string => {
  if (pathname === MAIN_PAGE_PATH) return MAIN_PAGE_INTL_ID;
  if (pathname === PRODUCTS_PATH) return PRODUCTS_INTL_ID;
  if (pathname === PRODUCTS_ACCOUNT_PATH) return PRODUCTS_INTL_ID;
  if (pathname === PRODUCTS_ACCOUNT_SAVING_PATH) return PRODUCTS_INTL_ID;
  if (pathname === PRODUCTS_ACCOUNT_CURRENT_PATH) return PRODUCTS_INTL_ID;
  if (pathname === PRODUCTS_ACCOUNT_LIST_PATH) return PRODUCTS_INTL_ID;
  if (pathname === PRODUCTS_ACCOUNT_DETAILS_PATH) return PRODUCTS_INTL_ID;
  return MAIN_PAGE_INTL_ID;
};
