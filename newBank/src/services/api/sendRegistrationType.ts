import { post } from ".";

import { config } from "../../config/config";

type StepsType = {
  back: string;
  next: string;
};

export type SendRegistrationType = {
  uuid: string;
  type: "online" | "offline";
};

type ResponseType = {
  uuid: string;
  Step: StepsType;
};

export const sendRegistrationType = ({ uuid, type }: SendRegistrationType) =>
  post<ResponseType>({
    url: config.api.sendRegistrationType,
    body: {
      uuid,
      type,
    },
  });
