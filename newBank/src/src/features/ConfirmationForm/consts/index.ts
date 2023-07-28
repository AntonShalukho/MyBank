import { InitialEmailFormType } from "../types";

export const initialEmailFormValues: InitialEmailFormType = {
  firstInput: "",
  secondInput: "",
  thirdInput: "",
  fourthInput: "",
  fifthInput: "",
  sixthInput: "",
};

export const InputsConfigMap = [
  "firstInput",
  "secondInput",
  "thirdInput",
  "fourthInput",
  "fifthInput",
  "sixthInput",
] as const;
