import { SET_TRANSACTION_HISTORY } from "../actionTypes/transactionTypes";

import {
  TransactionsType,
  TransactionsActionType,
} from "../types/transactionTypes";

export const initialState = {
  transactionHistory: null,
};

export const transactionsReducer = (
  state: TransactionsType = initialState,
  action: TransactionsActionType
) => {
  switch (action.type) {
    case SET_TRANSACTION_HISTORY:
      return {
        ...state,
        transactionHistory: action.payload,
      };

    default:
      return state;
  }
};
