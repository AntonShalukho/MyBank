import { config } from "../../config/config";

import { get } from ".";

export type BackgroundType = {
  id: number;
  type: "DEFAULT" | "PICTURE" | "GRADIENT";
  pictureLink: string;
  rgbGradientFirstColor: string;
  rgbGradientSecondColor: string;
  iconLink: string;
};

export type ButtonType = {
  id: number;
  title: string;
  iconLink: string;
};

export type AdvertisementProductsType = {
  id: number;
  heading: string;
  description: string | null;
  position: "TOP" | "BOTTOM";
  background: BackgroundType;
  button: ButtonType | null;
  actionLink: string;
  orderNumber: number;
};

export type AdvertisementResponseType = {
  data: AdvertisementProductsType[];
  error?: Error;
};

export const getAdvertisementProducts = () =>
  get<AdvertisementProductsType[]>({
    url: config.api.getAdvertisementProducts,
  });
