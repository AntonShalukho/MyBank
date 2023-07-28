import { SpinnerActionType, SpinnerStateType } from "redux/types/spinnerType";

import { TOGGLE_SPINNER } from "utils/variables";

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
