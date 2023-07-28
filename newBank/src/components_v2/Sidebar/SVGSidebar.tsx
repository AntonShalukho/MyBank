import { MainPageIcon, ProductsIcon } from "../Icon";

export const SVGSidebar = {
  mainPage: MainPageIcon,
  Products: ProductsIcon,
  main: MainPageIcon,
  accounts: null,
};

export type SVGKeyType = keyof typeof SVGSidebar;
