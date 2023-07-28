import { PASSPORT, POLISH_ID } from "../../../../utils/variables";

export type DeleteKeysDateType =
  | "deleteContentBackward"
  | "deleteContentForward";

export type DocumentType = typeof POLISH_ID | typeof PASSPORT;

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
