import { config } from "src/shared/config/apiConfig/config";

import { get } from "src/shared/api";

import { AdvertisementProductsType } from "../types";

export const getAdvertisementProducts = () =>
  get<AdvertisementProductsType[]>({
    url: config.api.getAdvertisementProducts,
  });
