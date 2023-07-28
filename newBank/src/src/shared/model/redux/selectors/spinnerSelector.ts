import { StateType } from "src/shared/model/redux/types/stateTypes";

export const selectSpinner = (state: StateType) => state.spinner.isLoading;
