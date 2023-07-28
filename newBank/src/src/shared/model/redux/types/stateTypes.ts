import { AdvertisementStateType } from "./advertisementType";
import { SpinnerStateType } from "./spinnerType";

export type StateType = {
  spinner: SpinnerStateType;
  advertisement: AdvertisementStateType;
};
