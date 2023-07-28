import { SET_ADVERTISEMENT } from "src/shared/consts/redux";

import { AdvertisementProductsType } from "src/shared/types/advertisement";

export const advertisementAction = (
  advertisement: AdvertisementProductsType[]
) => ({
  type: SET_ADVERTISEMENT,
  payload: advertisement,
});
