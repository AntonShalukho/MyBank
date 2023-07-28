import { StateType } from "src/shared/model/redux/types/stateTypes";

export const selectAdvertisement = (state: StateType) =>
  state.advertisement.advertisements;
