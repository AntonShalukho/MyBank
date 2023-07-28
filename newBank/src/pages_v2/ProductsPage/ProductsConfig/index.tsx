import React from "react";

import { PRODUCTS_PATH } from "utils/consts/leftBarConsts";

import { PRODUCTS_ACCOUNT_PATH } from "../../../utils/variables";

import { Accounts } from "../Accounts";

type ProductsConfigType = {
  pathname: string;
};

export const ProductsConfig: React.FC<ProductsConfigType> = ({ pathname }) => {
  const isPath = (path: string): boolean => !!pathname.match(path);

  if (isPath(PRODUCTS_PATH)) {
    return <Accounts />;
  }
  if (isPath(PRODUCTS_ACCOUNT_PATH)) {
    return <Accounts />;
  }
  return null;
};
