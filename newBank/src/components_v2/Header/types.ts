import { ReactNode } from "react";

export type ContactDropDownType = {
  handleDropDown(): void;
};

export type NumberBlockType = {
  title: string | ReactNode;
  content: string;
};
