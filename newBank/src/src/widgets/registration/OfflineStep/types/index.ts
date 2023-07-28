import {
  RegistrationRequestType,
  RegistrationResponseType,
} from "src/shared/types/registration";

type RegistrationCourierRequestType = Pick<
  RegistrationRequestType,
  "uuid" | "country" | "city" | "street" | "houseNumber" | "flat"
>;

type RegistrationCourierResponseType = Pick<
  RegistrationResponseType,
  "uuid" | "Step"
>;

export type SendRegistrationCourierType = (
  data: RegistrationCourierRequestType
) => Promise<RegistrationCourierResponseType>;

export type InitialValuesType = {
  country: string;
  city: string;
  street: string;
  houseNumber: string;
  flat: string;
};
