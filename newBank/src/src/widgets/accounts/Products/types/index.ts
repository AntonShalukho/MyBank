import { AccountsResponseType } from "src/shared/types/accounts";

export type ProductResponseType = Pick<
  AccountsResponseType,
  "name" | "description"
>;

export type AccountProductsRequestType = () => Promise<ProductResponseType[]>;
