import { InitialValuesSecurityInformation } from "components_v2/UserProfileSection/types";

import { put } from ".";

import { config } from "../../config/config";

export const sendSecurityInformationData = (
  data: InitialValuesSecurityInformation
) => {
  put({
    url: `${config.api.setUserProfileSecurityInformation}`,
    body: {
      documentID: data.passportNumber,
      documentExpirationDate: data.passportExpirationDate,
    },
  });
};
