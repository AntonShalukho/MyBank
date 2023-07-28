import { format } from "date-fns";

import { InitialValuesPersonalInformation } from "src/widgets/UserProfileSection/types";

import { UserProfileDataType } from "../types/apiType";

const getFullDate = (date: string) => format(new Date(date), "dd/MM/yyyy");

export const getIdData = (data: UserProfileDataType) => ({
  id: {
    title: `${data.name} ${data.surname}`,
    description: `ID: ${data.uuid}`,
  },
});

export const getPersonalData = (data: UserProfileDataType) => ({
  name: { title: "name", description: data.name },
  surname: { title: "surname", description: data.surname },
  email: {
    title: "e-mail",
    description: data.email,
  },
  phone: {
    title: "phone number",
    description: "+375 09 009-09-09",
  },
  residenceAddress: {
    title: "residence address",
    description: data.street ?? "",
  },
  residenceCity: {
    title: "residence city",
    description: data.city ?? "",
  },
});

export const getSecurityData = (data: UserProfileDataType) => ({
  passportNumber: {
    title: "passport number",
    description: data.documentSerialNumber,
  },
  passportExpirationDate: {
    title: "passport expiration date",
    description: getFullDate(data.expirationDate),
  },
  pesel: {
    title: "PESEL",
    description: data.peselNumber ? data.peselNumber : "",
  },
  language: { title: "default language", description: "English" },
});

export const getInitialValuesPersonalInformation = (
  data: UserProfileDataType
) =>
  ({
    email: data.email,
    residenceAddress: `${data.street}`,
    residenceCity: data.city,
  } as InitialValuesPersonalInformation);

export const getInitialValuesSecurityInformation = (
  data: UserProfileDataType
) => ({
  passportNumber: data.documentSerialNumber,
  passportExpirationDate: getFullDate(data.expirationDate),
});
