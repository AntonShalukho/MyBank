import { ReactNode } from "react";

export type InfoCardProps = {
  title: ReactNode;
  workScheduleFirst: ReactNode;
  workScheduleSecond?: ReactNode;
  className?: string;
};

export type SocialType = {
  name: ReactNode;
  link: string;
};

export type StoresType = {
  name: ReactNode;
  link: string;
};
