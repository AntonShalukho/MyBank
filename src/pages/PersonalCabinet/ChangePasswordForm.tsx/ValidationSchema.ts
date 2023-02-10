import * as yup from "yup";

import { passwordRegExp } from "../../../regexs";

export const validationSchema = yup.object().shape({
  currentPassword: yup
    .string()
    .required("passwordRequired")
    .matches(passwordRegExp, "passwordRules"),
  newPassword: yup
    .string()
    .required("confirmPasswordRequired")
    .matches(passwordRegExp, "passwordRules"),
  confirmNewPassword: yup
    .string()
    .required("confirmPasswordRequired")
    .matches(passwordRegExp, "passwordRules")
    .oneOf([yup.ref("newPassword")], "passwordsNotMatch"),
});
