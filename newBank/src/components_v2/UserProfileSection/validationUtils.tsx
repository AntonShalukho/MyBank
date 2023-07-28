import { FormikValues } from "formik";
import {
  emailsRegExp,
  onlyLatinDigitsDoteSpaceDashWithoutTrailingSpaces,
  onlyLatinDoteSpaceDashWithoutTrailingSpaces,
} from "regexs";
import * as yup from "yup";

export const personalInformationValidationSchema = yup.object().shape({
  email: yup.string().email(" ").matches(emailsRegExp, " ").max(100).required(),
  residenceAddress: yup
    .string()
    .ensure()
    .max(100)
    .matches(onlyLatinDigitsDoteSpaceDashWithoutTrailingSpaces, {
      message: " ",
    })
    .required("Residence Address is required"),
  residenceCity: yup
    .string()
    .ensure()
    .max(100)
    .matches(onlyLatinDoteSpaceDashWithoutTrailingSpaces, { message: " " })
    .required("Residence City is required"),
});

export const securityInformationValidationSchema = yup.object().shape({
  passportNumber: yup.string().min(6).max(15).required(),
});

// TODO remove this function & add props to initial function
export const handleValidate = (values: FormikValues) => {
  if (values.passportExpirationDate) {
    const date = values.passportExpirationDate;
    const errors = Object.create(null);

    const day = date.split("").slice(0, 2).join("");
    const month = date.split("").slice(3, 5).join("");
    const year = date.split("").slice(6).join("");

    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

    if (+day > 31 || +day < 1) {
      errors.passportExpirationDate = " ";
    }
    if (+month > 12 || +month < 1) {
      errors.passportExpirationDate = " ";
    }
    if (+year < currentYear) {
      errors.passportExpirationDate = " ";
    }
    if (+month === 2 && +day > 28) {
      errors.passportExpirationDate = " ";
    }
    if (+year <= currentYear && +month <= currentMonth && +day <= currentDay) {
      errors.passportExpirationDate = " ";
    }
    return errors;
  }
  return 0;
};
