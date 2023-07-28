export type AccountsRequestType = {
  id: string;
  bankProductName: string;
  currency: CurrencyType;
  iban: string;
  accountName: string;
  balance: number;
  interest: number;
  openDate: string;
};

export type AccountsResponseType = {
  name: string;
  description: string;
};

export type CurrencyType = {
  name: string;
  picture_link: string;
};

export type LoanResponseType = {
  data: AccountsRequestType[];
  error?: Error;
};
