import {
  BANK,
  COURIER,
  ONLINE,
  OFFLINE,
  POLISH_ID,
  PASSPORT,
} from "src/shared/consts/Registration";

export type SignUpStepsType = {
  back: string | null;
  next: string | null;
};

export type RegistrationResponseType = {
  uuid: string;
  Step: SignUpStepsType;
  code: string;
};

export type DocumentType = typeof POLISH_ID | typeof PASSPORT;

export type RegistrationRequestType = {
  uuid: string;
  type: OfflineType;
  name: string;
  surname: string;
  email: string;
  password: string;
  pesel: string;
  documentType: DocumentType;
  documentID: string;
  documentExpirationDate: string;
  country: string;
  city: string;
  street: string;
  houseNumber: string;
  flat: string;
  agreement: boolean;
};

export type OfflineType =
  | typeof COURIER
  | typeof BANK
  | typeof ONLINE
  | typeof OFFLINE;
