import { UserProfileDataType } from "pages_v2/UserProfilePage/types/apiType";

import { get } from ".";

import { config } from "../../config/config";

export const getAccountInfo = () =>
  get<UserProfileDataType>({
    url: config.api.getUserProfileInformation,
  });
