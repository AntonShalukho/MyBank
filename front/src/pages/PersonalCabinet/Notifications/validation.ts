import * as yup from "yup";

import { emailsRegExp } from "../../../regexs";

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .matches(emailsRegExp, "invalidEmailCharacters")
    .email()
    .required("emailRequired")
    .max(64, "emailMoreThanCanBe"),
});
