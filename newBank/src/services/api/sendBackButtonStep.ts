import { post } from ".";

import { config } from "../../config/config";

export type BackButtonStepType = {
  uuid: string | null;
  currentStepName: string;
};

type StepTwoType = {
  back: string;
  next: null;
};

type ResponseType = {
  uuid: string | null;
  Step: StepTwoType;
};

export const sendBackButtonStep = (data: BackButtonStepType) =>
  post<ResponseType>({
    url: config.api.sendBackButtonStep,
    body: {
      ...data,
    },
  });
