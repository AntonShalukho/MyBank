import { ReactNode } from "react";

export type NumberBlockType = {
  title: string | ReactNode;
  content: string;
};

export type PropsType = {
  handleDropDown: () => void;
};
