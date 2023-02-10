import { get } from ".";

import { config } from "../../config/config";

export type AccountInfoResponse = {
  data: AccountInfoType;
  error?: Error;
};

export type AccountInfoType = {
  firstName: string;
  lastName: string;
  residentStatus: boolean;
  phoneNumber: string;
  uid: string;
  email: string;
};

export const getAccountInfo = () =>
  get<AccountInfoType>({ url: config.api.accountInfoUrl });
