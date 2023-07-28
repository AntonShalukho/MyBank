import * as yup from "yup";

import {
  onlyLatinSymbolsNumbers,
  onlyLatinDoteSpaceDash,
} from "src/shared/consts/regexs";

export const validationSchema = yup.object().shape({
  country: yup.string().required(" "),
  city: yup
    .string()
    .matches(onlyLatinDoteSpaceDash, { message: " " })
    .required(" "),
  street: yup
    .string()
    .matches(onlyLatinDoteSpaceDash, { message: " " })
    .required(" "),
  houseNumber: yup
    .string()
    .matches(onlyLatinSymbolsNumbers, { message: " " })
    .required(" "),
  flat: yup
    .string()
    .matches(onlyLatinSymbolsNumbers, { message: " " })
    .required(" "),
});
