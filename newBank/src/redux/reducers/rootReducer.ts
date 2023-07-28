import { combineReducers } from "redux";

import { mapReducer } from "./mapReducer";

import { userReducer } from "./userReducer";

import { transactionsReducer } from "./transactionReducer";

import { accountProductsReducer } from "./accountProductsReducer";

import { spinnerReducer } from "./spinnerReducer";

import { accountsListReducer } from "./accountsListReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  map: mapReducer,
  transactions: transactionsReducer,
  accountProducts: accountProductsReducer,
  spinner: spinnerReducer,
  accountsList: accountsListReducer,
});
