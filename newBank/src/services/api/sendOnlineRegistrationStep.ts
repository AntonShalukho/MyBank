import { config } from "../../config/config";

import { post } from ".";

type SendOnlineRegistrationStepType = {
  uuid: string;
};

type StepsType = {
  back: string;
  next: string;
};

type OnlineRegistrationResponseType = {
  uuid: string;
  Step: StepsType;
};

export const sendOnlineRegistrationStep = ({
  uuid,
}: SendOnlineRegistrationStepType) =>
  post<OnlineRegistrationResponseType>({
    url: config.api.sendOnlineRegistrationStep,
    body: {
      uuid,
    },
  });
