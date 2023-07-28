import {
  MAIN_PAGE_INTL_ID,
  MAIN_PAGE_PATH,
  ACCOUNTS_INTL_ID,
  PRODUCTS_ACCOUNT_PATH,
  CARDS_INTL_ID,
  CREDITS_INTL_ID,
  DEPOSITS_INTL_ID,
  MAIN_PAGE_SIDE_BAR_TITLE,
  MAIN_SIDE_BAR_TITLE,
  MAIN_PAGE_ACCOUNT_PATH,
  MAIN_PAGE_CARDS_PATH,
  MAIN_PAGE_CREDITS_PATH,
  MAIN_PAGE_DEPOSITS_PATH,
  PRODUCTS_ACCOUNT_LIST_PATH,
} from "../../utils/variables";

export type SidebarDataItem = {
  title:
    | typeof MAIN_PAGE_SIDE_BAR_TITLE
    | typeof ACCOUNTS_INTL_ID
    | typeof MAIN_SIDE_BAR_TITLE;
  path: typeof MAIN_PAGE_PATH | typeof PRODUCTS_ACCOUNT_LIST_PATH;
  subNav?: SubNavType[];
  mainTitle?: typeof MAIN_PAGE_INTL_ID | typeof ACCOUNTS_INTL_ID;
};

export type SubNavType = {
  title:
    | typeof ACCOUNTS_INTL_ID
    | typeof CARDS_INTL_ID
    | typeof CREDITS_INTL_ID
    | typeof DEPOSITS_INTL_ID;
  path:
    | typeof PRODUCTS_ACCOUNT_PATH
    | typeof MAIN_PAGE_ACCOUNT_PATH
    | typeof MAIN_PAGE_CARDS_PATH
    | typeof MAIN_PAGE_CREDITS_PATH
    | typeof MAIN_PAGE_DEPOSITS_PATH;
};

export const sidebarData: SidebarDataItem[] = [
  {
    title: MAIN_SIDE_BAR_TITLE,
    path: MAIN_PAGE_PATH,
    mainTitle: MAIN_PAGE_INTL_ID,
  },

  {
    title: ACCOUNTS_INTL_ID,
    path: PRODUCTS_ACCOUNT_LIST_PATH,
    mainTitle: ACCOUNTS_INTL_ID,
  },
];
