import { ReactNode } from "react";

export type PopupProps = {
  children: ReactNode | JSX.Element;
  modalContainer?: HTMLElement;
  buttonContent?: ReactNode;
  onClose?: () => void;
  className?: string;
};
