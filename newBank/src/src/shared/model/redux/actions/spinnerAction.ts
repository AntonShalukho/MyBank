import { TOGGLE_SPINNER } from "src/shared/consts/redux";

export const spinnerAction = (isLoading: boolean) => ({
  type: TOGGLE_SPINNER,
  payload: isLoading,
});
