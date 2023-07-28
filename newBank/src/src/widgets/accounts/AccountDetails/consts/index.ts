import { AccountsRequestType } from "src/shared/types/accounts";

export const initialValue: AccountsRequestType = {
  id: "1",
  bankProductName: "",
  iban: "",
  accountName: "",
  currency: {
    name: "",
    picture_link: "",
  },
  balance: 0.0,
  interest: 11,
  openDate: "",
};
