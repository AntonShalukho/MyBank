import { ReactNode } from "react";

export type CurrencyMockDataType = Pick<
  AccountInitialValues,
  "currency" | "interest"
>;
export type InterestType = Pick<AccountInitialValues, "interest">;

export type PolicyType = {
  isConfirm: string;
};

export type AccountInitialValues = {
  currency: string;
  interest: string;
  accountName: string;
  isConfirm: boolean;
};

export type AccountRequestType = {
  id: string;
  bankProductName: string;
  accountName: string;
  currency: {
    name: string;
    picture_link: string;
  };
};

export type CurrencyType = {
  currencyName: string;
  children: ReactNode;
  isActive: boolean;
  onClick: (currency: string) => void;
};
