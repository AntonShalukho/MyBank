import { combineReducers } from "redux";

import { mapReducer } from "./mapReducer";

import { notificationsReducer } from "./notificationsReducer";

import { userReducer } from "./userReducer";

import { transactionsReducer } from "./transactionReducer";

import { accountProductsReducer } from "./accountProductsReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  map: mapReducer,
  notifications: notificationsReducer,
  transactions: transactionsReducer,
  accountProducts: accountProductsReducer,
});
