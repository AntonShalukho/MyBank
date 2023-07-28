import { CurrencyMockData } from "../moke/CurrencyMockData";

import { AccountInitialValues } from "../types";

export const initialValues: AccountInitialValues = {
  currency: "PLN",
  interest: CurrencyMockData[0].interest,
  accountName: "",
  isConfirm: false,
};
