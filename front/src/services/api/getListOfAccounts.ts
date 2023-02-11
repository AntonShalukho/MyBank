import { config } from "../../config/config";

import { get } from ".";

export type CurrencyType = {
  name: string;
  picture_link: string;
};

export type ListOfAccountType = {
  id: number;
  bankProductName: string;
  iban: string;
  accountName: string;
  currency: CurrencyType;
  balance: number;
  interest: number;
  openDate: string;
};

export type LoanResponseType = {
  data: ListOfAccountType[];
  error?: Error;
};

export const getListOfAccounts = () =>
  get<ListOfAccountType[]>({
    url: config.api.getListsOfAccounts,
  });
