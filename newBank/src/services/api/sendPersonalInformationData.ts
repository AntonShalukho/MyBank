import { InitialValuesPersonalInformation } from "components_v2/UserProfileSection/types";

import { put } from ".";

import { config } from "../../config/config";

export const sendPersonalInformationData = (
  data: InitialValuesPersonalInformation
) => {
  put({
    url: `${config.api.setUserProfilePersonalInformation}`,
    body: {
      email: data.email,
      city: data.residenceCity,
      street: data.residenceAddress,
      house_number: data.houseNumber,
      apartment_number: data.apartmentNumber,
    },
  });
};
