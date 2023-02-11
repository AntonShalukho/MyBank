import { post } from ".";

import { config } from "../../config/config";

export const sendRegistrationTelegramRequest = (phoneNumber: string) =>
  post({
    url: config.api.registrationTelegramUrl,
    body: { phoneNumber },
  });
