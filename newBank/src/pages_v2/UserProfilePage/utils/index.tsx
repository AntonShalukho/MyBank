import { format } from "date-fns";

import {
  InitialValuesPersonalInformation,
  InitialValuesSecurityInformation,
} from "components_v2/UserProfileSection/types";

import { UserProfileDataType } from "../types/apiType";

export const getFullDate = (date: string) => {
  const correctDate = date
    .split("/")
    .reduce((acc: string[], item: string, index: number) => {
      if (index === 1) {
        acc.unshift(item);
      } else {
        acc.push(item);
      }
      return acc;
    }, [])
    .join();
  return format(new Date(correctDate), "dd/MM/yyyy");
};

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
  residenceAddress: {
    title: "residence address",
    description: data.street ?? "",
  },
  residenceCity: {
    title: "residence city",
    description: data.city ?? "",
  },
});

export const getSecurityData = (data: UserProfileDataType) => {
  const isPolishId = data.documentType === "POLISH_ID";
  return {
    passportNumber: {
      title: isPolishId ? "ID card number" : "passport number",
      description: data.documentSerialNumber,
    },
    passportExpirationDate: {
      title: isPolishId ? "ID expiration date" : "passport expiration date",
      description: getFullDate(data.expirationDate),
    },
    pesel: {
      title: "PESEL",
      description: data.peselNumber ? data.peselNumber : "",
    },
    language: { title: "default language", description: "English" },
  };
};

export const getInitialValuesPersonalInformation = (
  data: UserProfileDataType
) =>
  ({
    email: data.email,
    residenceAddress: data.street,
    residenceCity: data.city,
  } as InitialValuesPersonalInformation);

export const getInitialValuesSecurityInformation = (
  data: UserProfileDataType
) =>
  ({
    passportNumber: data.documentSerialNumber,
    passportExpirationDate: getFullDate(data.expirationDate),
  } as InitialValuesSecurityInformation);
