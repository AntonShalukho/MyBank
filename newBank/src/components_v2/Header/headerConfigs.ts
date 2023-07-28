import {
  MAIN_PAGE_INTL_ID,
  PRODUCTS_INTL_ID,
  MAIN_PAGE_PATH,
  PRODUCTS_PATH,
  PRODUCTS_ACCOUNT_PATH,
  PRODUCTS_ACCOUNT_SAVING_PATH,
  PRODUCTS_ACCOUNT_CURRENT_PATH,
  PRODUCTS_ACCOUNT_LIST_PATH,
  PRODUCTS_ACCOUNT_DETAILS_PATH,
  PRODUCTS_ACCOUNT_PRODUCTS_PATH,
  ACCOUNT_SETTINGS_PATH,
  ACCOUNT_SETTINGS_INTL_ID,
} from "../../utils/variables";

export const getDirectionConfig = (pathname: string): string => {
  const isPath = (path: string): boolean => !!pathname.match(path);
  if (pathname === MAIN_PAGE_PATH) {
    return PRODUCTS_ACCOUNT_PRODUCTS_PATH;
  }
  if (isPath(PRODUCTS_PATH)) {
    return PRODUCTS_ACCOUNT_PRODUCTS_PATH;
  }
  if (isPath(PRODUCTS_ACCOUNT_PATH)) {
    return PRODUCTS_ACCOUNT_PRODUCTS_PATH;
  }
  return PRODUCTS_ACCOUNT_PRODUCTS_PATH;
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
  if (pathname.split("/")[1] === ACCOUNT_SETTINGS_PATH)
    return ACCOUNT_SETTINGS_INTL_ID;
  return MAIN_PAGE_INTL_ID;
};
