import { ReactNode } from "react";

export type NotificationCardTypes = {
  icon: string | ReactNode;
  description: string;
  iconClassName?: string;
};
