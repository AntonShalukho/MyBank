import { post } from "src/shared/api";

import { config } from "src/shared/config/apiConfig/config";

import { ClientProductServiceType } from "../types/apiTypes";

export const sendClientProduct: ClientProductServiceType = (body) =>
  post({
    url: config.api.sendClientProduct,
    body: { ...body },
  });
