import { createSelector } from "@reduxjs/toolkit";

import { StateType } from "../types/accountProductsType";

export const accountProductNameSelector = (state: StateType) =>
  state.accountProducts;

export const selectAccountProductName = createSelector(
  accountProductNameSelector,
  (accountProducts) => accountProducts.name
);
