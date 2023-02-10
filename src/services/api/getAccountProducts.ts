import { config } from "../../config/config";
import { get } from ".";

export type ProductType = {
  name: string;
  description: string;
};

export type AccountProductsResponse = {
  data: ProductType[];
  error?: Error;
};

export const getAccountProducts = () =>
  get<ProductType[]>({
    url: config.api.getAccountProducts,
    auth: true,
  });
