import React from "react";

import { useLocation } from "react-router";

import { ListOfAccounts } from "../../ProductsPage/Accounts/ListOfAccounts";

import {
  MAIN_PAGE_ACCOUNT_PATH,
  MAIN_PAGE_PATH,
} from "../../../utils/variables";

import { ListOfAccountType } from "../../../services/api/getListOfAccounts";

type RouterConfigType = {
  accounts: ListOfAccountType[];
};

export const MainPageRouteConfig = ({ accounts }: RouterConfigType) => {
  const { pathname } = useLocation();
  if (pathname === "/") return <ListOfAccounts accountsData={accounts} />;
  if (pathname === MAIN_PAGE_PATH)
    return <ListOfAccounts accountsData={accounts} />;
  if (pathname === MAIN_PAGE_ACCOUNT_PATH) return <ListOfAccounts />;
  return null;
};
