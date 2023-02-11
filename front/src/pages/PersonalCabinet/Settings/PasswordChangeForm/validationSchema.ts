import * as yup from "yup";

export const validationSchema = yup.object().shape({
  secretQuestionAnswer: yup.string().required("answerRequired"),
});
