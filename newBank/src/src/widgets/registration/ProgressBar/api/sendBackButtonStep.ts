import { config } from "../../../../shared/config/apiConfig/config";

import { post } from "../../../../shared/api";

import { BackButtonStepType, ResponseType } from "../types";

export const sendBackButtonStep = (data: BackButtonStepType) =>
  post<ResponseType>({
    url: config.api.sendBackButtonStep,
    body: {
      ...data,
    },
  });
