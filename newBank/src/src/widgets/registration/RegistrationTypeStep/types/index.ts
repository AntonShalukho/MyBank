import { OFFLINE, ONLINE } from "src/shared/consts/Registration";

import {
  OfflineType,
  RegistrationRequestType,
  RegistrationResponseType,
} from "src/shared/types/registration";

export type InitialValuesType = {
  registrationType: typeof ONLINE | typeof OFFLINE;
};

export type ContextRadioBtnType = {
  icon: string;
  title: string;
  description: string | JSX.Element;
};

export type OfflineInitialValuesType = {
  registrationType: OfflineType;
};

export type ResponseType = Pick<RegistrationResponseType, "uuid" | "Step">;

export type SendOfflineRegistrationType = Pick<
  RegistrationRequestType,
  "uuid" | "type"
>;

export type SendRegistrationType = Pick<
  RegistrationRequestType,
  "uuid" | "type"
>;
