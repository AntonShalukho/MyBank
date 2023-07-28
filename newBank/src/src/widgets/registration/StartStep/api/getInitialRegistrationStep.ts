import { get } from "src/shared/api";

import { config } from "src/shared/config/apiConfig/config";

import { ResponseType } from "../types";

export const getInitialRegistrationStep = () =>
  get<ResponseType>({
    url: config.api.getRegistrationInitial,
  });
