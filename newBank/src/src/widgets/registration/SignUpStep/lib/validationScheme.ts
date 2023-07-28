import * as yup from "yup";

import { emailsRegExp, onlyLatinLetters } from "src/shared/consts/regexs";

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(onlyLatinLetters, { message: "  " })
    .required({ message: "" }),
  surname: yup
    .string()
    .matches(onlyLatinLetters, { message: " " })
    .required({ message: "" }),
  email: yup
    .string()
    .email({ message: "" })
    .matches(emailsRegExp, { message: " " })
    .required({ message: "" }),
});
