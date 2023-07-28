import { createSelector } from "@reduxjs/toolkit";

import { StateType } from "redux/types/userTypes";

export const spinnerSelector = (state: StateType) => state.spinner;

export const selectSpinner = createSelector(
  spinnerSelector,
  (spinner) => spinner.isLoading
);
