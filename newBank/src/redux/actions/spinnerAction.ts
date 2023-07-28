import { TOGGLE_SPINNER } from "utils/variables";

export const toggleSpinner = (isLoading: boolean) => ({
  type: TOGGLE_SPINNER,
  payload: isLoading,
});
