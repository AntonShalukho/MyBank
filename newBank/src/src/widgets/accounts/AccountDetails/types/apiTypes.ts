import { AccountsRequestType } from "src/shared/types/accounts";

export type GetAccountDetailsType = (
  id: number
) => Promise<AccountsRequestType>;

export type SendAccountDetailsType = (
  data: AccountsRequestType
) => Promise<AccountsRequestType>;
