import * as yup from "yup";

import {
  emailsRegExp,
  onlyLatinLetters,
  passwordRegExp,
} from "../../../../regexs";

export const validationSchema = yup.object().shape({
  name: yup.string().matches(onlyLatinLetters, "  ").max(100).required(" "),
  surname: yup.string().matches(onlyLatinLetters, " ").max(100).required(" "),
  email: yup
    .string()
    .email(" ")
    .matches(emailsRegExp, " ")
    .max(100)
    .required(" "),
  password: yup
    .string()
    .matches(
      passwordRegExp,
      "latin, must contain at least 12 symbols, one capital letter, one special symbol, one digit"
    )
    .required(" "),
  repeatedPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "password do not match")
    .required(" "),
});
