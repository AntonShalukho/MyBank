import { post } from ".";

import { config } from "../../config/config";

export type SendRegistrationCourierType = {
  uuid: string;
  country: string;
  city: string;
  street: string;
  houseNumber: string;
  flat: string;
};

export type StepsType = {
  back: string;
  next: string;
};

type ResponseType = {
  uuid: string;
  Step: StepsType;
};

export const sendRegistrationCourierStep = (
  data: SendRegistrationCourierType
) =>
  post<ResponseType>({
    url: config.api.sendRegistrationCourier,
    body: {
      ...data,
    },
  });
