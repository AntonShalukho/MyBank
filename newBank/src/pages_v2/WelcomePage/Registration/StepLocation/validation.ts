import * as yup from "yup";

import {
  onlyLatinSymbolsNumbers,
  onlyLatinDoteSpaceDash,
} from "../../../../regexs";

export type InitialValuesType = {
  country: string;
  city: string;
  street: string;
  houseNumber: string;
  flat: string;
};

export const initialValues = {
  country: "Poland",
  city: "",
  street: "",
  houseNumber: "",
  flat: "",
};

export const validationSchema = yup.object().shape({
  country: yup.string().required(" "),
  city: yup
    .string()
    .matches(onlyLatinDoteSpaceDash, { message: " " })
    .required(" ")
    .min(1, " "),
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
