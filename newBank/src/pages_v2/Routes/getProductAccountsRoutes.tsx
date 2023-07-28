import { AccountDetails } from "pages_v2/ProductsPage/Accounts/AccountDetails";

import { AccountProduct } from "pages_v2/ProductsPage/Accounts/AccountProduct";

import { ListOfAccounts } from "pages_v2/ProductsPage/Accounts/ListOfAccounts";

import {
  CURRENT,
  SAVING,
} from "pages_v2/ProductsPage/Accounts/ListOfAccounts/constants";

import { OpenAccount } from "pages_v2/ProductsPage/Accounts/OpenAccount";

import { Route } from "react-router";

export const getProductAccountsRoutes = () => (
  <>
    <Route path="" element={<ListOfAccounts />} />
    <Route path="list-of-accounts" element={<ListOfAccounts />} />
    <Route
      path="open-accounts-Saving"
      element={<OpenAccount accountType={SAVING} />}
    />
    <Route
      path="open-accounts-Current"
      element={<OpenAccount accountType={CURRENT} />}
    />
    <Route path="details-account" element={<AccountDetails />} />
    <Route path="products" element={<AccountProduct />} />
  </>
);
