import { UserMockData } from "../types";

export const UserInformData: UserMockData = {
  title: "entities_infoTitle",
  description: "entities_infoDesc",
  buttons: {
    primary: "entities_stayOnSite",
    secondary: "logOut",
  },
};

export const UserExpiredData: UserMockData = {
  title: "entities_expiredTitle",
  description: "entities_expiredDecs",
  buttons: {
    primary: "logIn",
    secondary: "cancel",
  },
};
