import {
  PRODUCTS_ACCOUNT_PATH,
  PRODUCTS_PATH,
  PRODUCTS_ACCOUNT_LIST_PATH,
  PRODUCTS_ACCOUNT_CURRENT_PATH,
  PRODUCTS_ACCOUNT_SAVING_PATH,
  PRODUCTS_ACCOUNT_DETAILS_PATH,
  PRODUCTS_ACCOUNT_PRODUCTS_PATH,
} from "../../utils/variables";

export const isMainPage = (pathname: string): boolean => {
  if (pathname === "/") return true;

  return RegExp(/main/).test(pathname);
};

export const getTitle = (pathname: string, isEmptyList?: boolean): string => {
  if (isMainPage(pathname)) {
    return "myProducts";
  }

  switch (pathname) {
    case PRODUCTS_ACCOUNT_PATH: {
      if (isEmptyList) {
        return "chooseTheAccount";
      }
      return "ListOfAccounts";
    }
    case PRODUCTS_PATH: {
      if (isEmptyList) {
        return "chooseTheAccount";
      }
      return "ListOfAccounts";
    }
    case PRODUCTS_ACCOUNT_LIST_PATH:
      return "ListOfAccounts";
    case PRODUCTS_ACCOUNT_CURRENT_PATH:
      return "openAccount";
    case PRODUCTS_ACCOUNT_SAVING_PATH:
      return "openSavingAccount";
    case PRODUCTS_ACCOUNT_DETAILS_PATH:
      return "AccountDetails";
    case PRODUCTS_ACCOUNT_PRODUCTS_PATH:
      return "chooseTheAccount";
    default:
      return "";
  }
};
