import { length } from "ramda";

import { peselRegExp } from "src/shared/consts/regexs";

import { PASSPORT, POLISH_ID } from "src/shared/consts/Registration";

import { DocumentType } from "src/shared/types/registration";

import { getDateMack } from "utils/dateUtils";

import {
  DeleteKeysDateType,
  DocumentLengthType,
  InitialValuesType,
} from "../types";

import { deleteKeysDate } from "../consts";

export const getRequestDateFormat = (date: string): string =>
  date.split("/").reverse().join("-");

export const handleValidate = (values: InitialValuesType) => {
  const date = values.documentExpirationDate;
  const errors = Object.create(null);

  const day = date.split("").slice(0, 2).join("");
  const month = date.split("").slice(3, 5).join("");
  const year = date.split("").slice(6).join("");

  const currentDay = new Date().getDate();
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  if (+day > 31) {
    errors.documentExpirationDate = " ";
  }
  if (+month > 12) {
    errors.documentExpirationDate = " ";
  }
  if (+year < currentYear) {
    errors.documentExpirationDate = " ";
  }
  if (+month === 2 && +day > 28) {
    errors.documentExpirationDate = " ";
  }
  if (+year <= currentYear && +month <= currentMonth && +day <= currentDay) {
    errors.documentExpirationDate = " ";
  }
  if (values.documentType === PASSPORT) {
    if (length(values.documentID) < 6 || length(values.documentID) > 15) {
      errors.documentID = " ";
    }
  }
  if (values.documentType === POLISH_ID) {
    if (length(values.documentID) > 9) {
      errors.documentID = " ";
    }
  }
  return errors;
};

export const getDocumentMaxLength = (
  documentType: DocumentType
): DocumentLengthType => {
  switch (documentType) {
    case PASSPORT:
      return { max: 15, min: 6 };
    case POLISH_ID:
      return { max: 9, min: 0 };
    default:
      return { max: 9, min: 0 };
  }
};

export const handleDateChange = (
  e: React.FormEvent<HTMLInputElement>,
  setFieldValue: (field: string, value: string) => void
) => {
  const { inputType } = e.nativeEvent as InputEvent;
  const { data } = e.nativeEvent as InputEvent;
  const { value } = e.currentTarget as HTMLInputElement;
  if (deleteKeysDate.includes(inputType as DeleteKeysDateType)) {
    setFieldValue(
      "documentExpirationDate",
      `${(e.currentTarget as HTMLInputElement).value}`
    );
  } else if (!peselRegExp.test(data as string)) {
    setFieldValue("documentExpirationDate", value.slice(0, -1));
  } else {
    setFieldValue("documentExpirationDate", getDateMack(value));
  }
};
