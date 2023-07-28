import { ReactNode } from "react";

export type AdditionalIconBlockType = {
  description: string;
  children: ReactNode;
};

export type InfoBlockType = {
  title: string;
  titleDesc: string;
  buttonDesc: string;
  titleFontSize: boolean;
};
