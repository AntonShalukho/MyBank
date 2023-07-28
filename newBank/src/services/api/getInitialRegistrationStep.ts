import { config } from "../../config/config";

import { get } from ".";

export type StepTwoType = {
  back: string;
  next: string;
};

export type InitialRegistrationStepType = {
  uuid: string | null;
  Step: StepTwoType;
};

export type StepTwoResponseType = {
  data: InitialRegistrationStepType;
  error?: Error;
};

export const getInitialRegistrationStep = () =>
  get<InitialRegistrationStepType>({
    url: config.api.getRegistrationInitial,
  });
