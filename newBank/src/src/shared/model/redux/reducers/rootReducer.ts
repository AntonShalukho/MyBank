import { combineReducers } from "redux";

import { spinnerReducer } from "./spinnerReducer";

import { advertisementReducer } from "./advertisementReducer";

export const rootReducer = combineReducers({
  spinner: spinnerReducer,
  advertisement: advertisementReducer,
});
