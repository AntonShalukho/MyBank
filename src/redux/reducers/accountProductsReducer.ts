import { SET_ACCOUNT_PRODUCT_NAME } from "../actionTypes/AccountProductsActionsType";
import {
  AccountProductActionType,
  AccountProductType,
} from "../types/accountProductsType";

export const initialState = {
  name: "Current",
};

export const accountProductsReducer = (
  state: AccountProductType = initialState,
  action: AccountProductActionType
) => {
  switch (action.type) {
    case SET_ACCOUNT_PRODUCT_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};
