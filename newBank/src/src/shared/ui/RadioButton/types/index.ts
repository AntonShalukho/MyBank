import { ReactNode } from "react";

export type RadioButtonProps = {
  name: string;
  label?: string;
  value: string;
  className?: string;
  children?: ReactNode;
};
