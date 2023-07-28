import * as yup from "yup";

import { peselRegExp } from "../../../../regexs";

export const validationSchema = yup.object().shape({
  pesel: yup
    .string()
    .min(11, " ")
    .max(11, " ")
    .matches(peselRegExp, " ")
    .required(" "),
});
