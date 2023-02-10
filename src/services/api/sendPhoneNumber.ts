import { post } from ".";

import { config } from "../../config/config";

export type SendPhoneNumberType = {
  data: SendPhoneNumberData;
  error?: Error;
};

export type SendPhoneNumberData = { isClient: boolean; message: string };

export const sendPhoneNumber = (phoneNumber: string) =>
  post<SendPhoneNumberData>({
    url: config.api.phoneNumberUrl,
    body: {
      phoneNumber,
    },
  });
