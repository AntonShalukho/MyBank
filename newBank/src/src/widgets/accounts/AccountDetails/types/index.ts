import { AccountsRequestType } from "src/shared/types/accounts";

export type ModalContentType = {
  closeModal(): void;
  accountName: string;
};

export type AccountInfoBlockType = {
  account: AccountsRequestType;
};
