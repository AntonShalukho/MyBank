import * as yup from "yup";

export const validationSchema = yup.object().shape({
  passportNumber: yup
    .string()
    .max(30, "maxPassport")
    .min(2, "minTwo")
    .required("passportNumberRequired"),
});
