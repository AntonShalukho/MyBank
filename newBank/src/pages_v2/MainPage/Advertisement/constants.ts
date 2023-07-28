import { AdvertisementProductsType } from "../../../services/api/getAdvertisementProducts";

import styles from "./Advertisement.module.css";

export const getTextTitleStyles = (position: "TOP" | "BOTTOM") => {
  if (position === "BOTTOM") return styles.slider_text_title_bottom;
  return styles.slider_text_title_top;
};

export const getTextDescriptionStyles = (position: "TOP" | "BOTTOM") => {
  if (position === "BOTTOM") return styles.slider_text_description_bottom;
  return styles.slider_text_description_top;
};

export const getPictureLink = (product: AdvertisementProductsType) => {
  let valueToReturn = "";
  if (product.background.type !== "GRADIENT")
    valueToReturn = product.background.pictureLink;
  return valueToReturn;
};

export const getPictureStyle = (product: AdvertisementProductsType): string => {
  let valueToReturn = `linear-gradient(rgb(${product.background.rgbGradientFirstColor}), rgb(${product.background.rgbGradientSecondColor}))`;
  if (product.background.type !== "GRADIENT") valueToReturn = "";
  return valueToReturn;
};

export const getPictureIcon = (product: AdvertisementProductsType): string =>
  product.background.iconLink || "";

export const isLink = (product: AdvertisementProductsType) => {
  if (product.background.type !== "GRADIENT") return true;
  return false;
};
