import { config } from "../../config/config";

import { get } from ".";

export type ProfilePictureResponse = {
  data: string;
  error?: Error;
};

export const getProfilePicture = () =>
  get<string>({ url: config.api.profilePictureUrl });
