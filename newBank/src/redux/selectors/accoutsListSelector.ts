import { StateType } from "redux/types/userTypes";

export const accountsListSelector = (state: StateType) =>
  state.accountsList.isEmptyList;
