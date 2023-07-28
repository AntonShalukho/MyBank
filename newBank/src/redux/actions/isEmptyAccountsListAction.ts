import { SET_IS_EMPTY_ACCOUNT_LIST } from "utils/consts/Redux";

export const setIsEmptyAccountsList = (isEmptyAccountsList: boolean) => ({
  type: SET_IS_EMPTY_ACCOUNT_LIST,
  payload: isEmptyAccountsList,
});
