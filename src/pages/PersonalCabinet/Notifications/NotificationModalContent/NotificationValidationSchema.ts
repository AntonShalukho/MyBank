import * as yup from "yup";

const SMSRegex = /^[0-9]+$/;

export const validationSchema = yup.object().shape({
  verificationCode: yup
    .string()
    .matches(SMSRegex, "modalNumValidationCode")
    .required("modalVerificationCode"),
});
