import { post } from ".";

import { config } from "../../config/config";

export type SendTelegramDataType = {
  phoneNumber: string;
  isClient: boolean;
};

export const sendTelegramRequest = (passportNumber: string) =>
  post<SendTelegramDataType>({
    url: config.api.telegramRequestUrl,
    body: { passportNumber },
  });
