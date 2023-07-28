import {
  RegistrationRequestType,
  RegistrationResponseType,
} from "src/shared/types/registration";

export type SignUpRequestType = Pick<
  RegistrationRequestType,
  "uuid" | "name" | "surname" | "email" | "password"
>;

export type ResponseType = Pick<RegistrationResponseType, "uuid" | "Step">;

export type InitialValuesType = {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
};
