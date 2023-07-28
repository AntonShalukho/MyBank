import { get } from ".";

import { config } from "../../config/config";

export type GetVideoLinkType = {
  id: number;
  videoLink: string;
};

export const getVideoLinks = () =>
  get<GetVideoLinkType[]>({
    url: config.api.getVideoLink,
  });
