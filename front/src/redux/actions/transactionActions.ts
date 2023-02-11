import { AnyAction } from "redux";

import { ThunkAction } from "redux-thunk";

import {
  getTransactionHistory,
  TransactionType,
} from "../../services/api/getTransactionHistory";

import { RootState } from "../store/store";

import { SET_TRANSACTION_HISTORY } from "../actionTypes/transactionTypes";

export const setTransactionHistory = (
  transactionHistory: TransactionType[]
) => ({
  type: SET_TRANSACTION_HISTORY,
  payload: transactionHistory,
});

export const setTransactionHistoryToStore =
  (): ThunkAction<Promise<unknown>, RootState, unknown, AnyAction> =>
  (dispatch) =>
    getTransactionHistory()
      .then((data) => {
        dispatch(setTransactionHistory(data));
      })
      .catch((err) => {
        throw err;
      });
