import { TOGGLE_SPINNER } from "src/shared/consts/redux";

import { SpinnerActionType, SpinnerStateType } from "../types/spinnerType";

const initialValue = { isLoading: false };

export const spinnerReducer = (
  state: SpinnerStateType = initialValue,
  action: SpinnerActionType
) => {
  switch (action.type) {
    case TOGGLE_SPINNER:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
