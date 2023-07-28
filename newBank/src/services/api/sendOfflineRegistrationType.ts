import { post } from ".";

import { config } from "../../config/config";

export type OfflineType = "courier" | "bank";

export type SendOfflineRegistrationType = {
  uuid: string;
  type: OfflineType;
};

type StepsType = {
  back: string;
  next: string;
};

type ResponseType = {
  uuid: string;
  Step: StepsType;
};

export const sendOfflineRegistrationType = (
  data: SendOfflineRegistrationType
) =>
  post<ResponseType>({
    url: config.api.setOfflineRegistrationType,
    body: {
      ...data,
    },
  });
