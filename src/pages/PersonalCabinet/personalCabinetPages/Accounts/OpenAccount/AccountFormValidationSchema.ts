import * as yup from "yup";

export const AccountFormValidationSchema = yup.object().shape({
  isConfirm: yup.boolean().isTrue().required(""),
});
