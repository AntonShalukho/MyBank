import { get } from "src/shared/api";

import { config } from "src/shared/config/apiConfig/config";

export type GetVideoLinkType = {
  id: number;
  videoLink: string;
};

export const getVideoLinks = () =>
  get<GetVideoLinkType[]>({
    url: config.api.getVideoLink,
  });
