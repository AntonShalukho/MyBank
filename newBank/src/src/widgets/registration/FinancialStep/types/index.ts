import {
  DocumentType,
  RegistrationRequestType,
  RegistrationResponseType,
} from "src/shared/types/registration";

export type DeleteKeysDateType =
  | "deleteContentBackward"
  | "deleteContentForward";

export type InitialValuesType = {
  pesel: string;
  documentType: DocumentType;
  documentID: string;
  documentExpirationDate: string;
};

export type DocumentLengthType = {
  max: number;
  min: number;
};

export type ContextRadioBtnType = {
  title: string;
};

export type FinancialRequestType = Pick<
  RegistrationRequestType,
  "uuid" | "pesel" | "documentType" | "documentID" | "documentExpirationDate"
>;

export type ResponseType = Pick<RegistrationResponseType, "uuid" | "Step">;
