import {
  AccountsListActionType,
  AccountsListStateType,
} from "redux/types/accountsListTypes";

import { SET_IS_EMPTY_ACCOUNT_LIST } from "utils/consts/Redux";

const initialValue = { isEmptyList: true };

export const accountsListReducer = (
  state: AccountsListStateType = initialValue,
  action: AccountsListActionType
) => {
  switch (action.type) {
    case SET_IS_EMPTY_ACCOUNT_LIST:
      return {
        ...state,
        isEmptyList: action.payload,
      };
    default:
      return state;
  }
};
