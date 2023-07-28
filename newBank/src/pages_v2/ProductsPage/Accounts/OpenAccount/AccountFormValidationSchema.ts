import * as yup from "yup";

export const AccountFormValidationSchema = yup.object().shape({
  currency: yup.string().required(""),
  isConfirm: yup.boolean().isTrue().required(""),
});
