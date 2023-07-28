import { ReactNode } from "react";

import { AccountsRequestType } from "src/shared/types/accounts";

export type ListOfProductsType = {
  accountsData?: AccountsRequestType[];
};

export type ProductsListType = {
  accounts: AccountsRequestType[];
};

export type ProductType = {
  account: AccountsRequestType;
};

export type ProductValueType = {
  account: AccountsRequestType;
  children: ReactNode;
  activeField: boolean;
};
