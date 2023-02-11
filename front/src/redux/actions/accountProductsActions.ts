import { SET_ACCOUNT_PRODUCT_NAME } from "../actionTypes/AccountProductsActionsType";

export const setAccountProductName = (name: string) => ({
  type: SET_ACCOUNT_PRODUCT_NAME,
  payload: name,
});
