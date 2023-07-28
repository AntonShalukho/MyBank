import { AdvertisementProductsType } from "src/shared/types/advertisement";

export type AdvertisementActionType = {
  type: string;
  payload: AdvertisementProductsType[];
};

export type AdvertisementStateType = {
  advertisements: AdvertisementProductsType[];
};
