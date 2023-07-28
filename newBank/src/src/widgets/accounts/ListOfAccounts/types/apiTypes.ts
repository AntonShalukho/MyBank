import { AccountsRequestType } from "src/shared/types/accounts";

export type ListOfAccountRequestType = () => Promise<AccountsRequestType[]>;
