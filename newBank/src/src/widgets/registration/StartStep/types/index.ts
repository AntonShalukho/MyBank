import { RegistrationResponseType } from "src/shared/types/registration";

export type ResponseType = Pick<RegistrationResponseType, "uuid" | "Step">;
