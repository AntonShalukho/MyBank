import * as yup from "yup";

export const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("firstNameRequired")
    .min(2, "firstNameLessThanTwo")
    .max(30, "firstNameMoreThanThirty"),
  lastName: yup
    .string()
    .required("lastNameRequired")
    .min(2, "lastNameLessThanTwo")
    .max(30, "lastNameMoreThanThirty"),
  middleName: yup
    .string()
    .min(2, "middleNameLessThanTwo")
    .max(30, "middleNameMoreThanThirty"),
  passportNumber: yup
    .string()
    .required("passportNumberRequired")
    .min(2, "passportLessThanTwo")
    .max(30, "passportMoreThanThirty"),
  isUsResident: yup.string().required(),
});

export const getErrors = (value: string, regex: RegExp): string[] | undefined =>
  !value.match(regex) && value.length > 0 ? ["errorRestricted"] : undefined;
