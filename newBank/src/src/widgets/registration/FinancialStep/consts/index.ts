import { POLISH_ID } from "src/shared/consts/Registration";

import { DeleteKeysDateType, InitialValuesType } from "../types";

export const deleteKeysDate: DeleteKeysDateType[] = [
  "deleteContentBackward",
  "deleteContentForward",
];

export const initialValues: InitialValuesType = {
  pesel: "",
  documentType: POLISH_ID,
  documentID: "",
  documentExpirationDate: "",
};
