import * as yup from "yup";

import { emailsRegExp, passwordRegExp } from "src/shared/consts/regexs";

export const initialValues = {
  email: "",
  password: "",
};

export const validationSchema = yup.object().shape({
  email: yup.string().matches(emailsRegExp, { message: " " }).required(" "),
  password: yup.string().matches(passwordRegExp, " ").required(" "),
});
