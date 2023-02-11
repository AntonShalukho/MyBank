import { config } from "../../config/config";

import { get, patch } from ".";

export type ProfilePictureResponse = {
  data: string;
  error?: Error;
};

export const getProfilePicture = () =>
  get<string>({ url: config.api.profilePictureUrl });

export const sendProfilePicture = (avatar: string) =>
  patch({
    requestHeaders: { "Content-type": "text/plain" },
    url: config.api.profilePictureUrl,
    body: avatar,
  });
