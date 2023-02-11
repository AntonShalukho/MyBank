import { createSelector } from "@reduxjs/toolkit";

import { StateType } from "../types/userTypes";

export const transactionHistorySelectors = (state: StateType) =>
  state.transactions;

export const selectTransactionHistory = createSelector(
  transactionHistorySelectors,
  (transactions) => transactions.transactionHistory
);

export const selectFirstThreeTransactions = createSelector(
  transactionHistorySelectors,
  (transactions) => transactions.transactionHistory?.slice(0, 3)
);
