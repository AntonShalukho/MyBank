import { SET_ADVERTISEMENT } from "src/shared/consts/redux";

import {
  AdvertisementActionType,
  AdvertisementStateType,
} from "../types/advertisementType";

const initialValue = {
  advertisements: [],
};

export const advertisementReducer = (
  state: AdvertisementStateType = initialValue,
  action: AdvertisementActionType
) => {
  switch (action.type) {
    case SET_ADVERTISEMENT:
      return {
        advertisements: action.payload,
      };
    default:
      return state;
  }
};
