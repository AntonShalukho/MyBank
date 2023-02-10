import { FormikErrors } from "formik";

import { Dispatch, FocusEvent, InputHTMLAttributes } from "react";

export interface FormPropsInterface {
  onSuccessSubmit: () => void;
}
export interface ClientFormProps {
  incrementStep: () => void;
  activeStep: number;
}
export interface RegistrationFormProps extends ClientFormProps {
  isClient?: boolean;
}

export type SetFieldValueType = (
  field: string,
  value: string,
  shouldValidate?: boolean | undefined
) => void;

export type BlurHandler = (
  e: FocusEvent<HTMLInputElement, Element>,
  handleBlur: {
    (e: React.FocusEvent<HTMLInputElement, Element>): void;
    <T = HTMLInputElement>(fieldOrEvent: T): T extends string
      ? (e: HTMLInputElement) => void
      : void;
  }
) => void;
export interface PassportNumberInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  focusHandler?: () => void;
  inputHandler?: () => void;
  setErrors: (
    errors: FormikErrors<{
      passportNumber: string;
    }>
  ) => void;
  handleBlur: {
    (e: React.FocusEvent<HTMLInputElement, Element>): void;
    <T = FocusEvent<HTMLInputElement, Element>>(
      fieldOrEvent: T
    ): T extends string
      ? (e: FocusEvent<HTMLInputElement, Element>) => void
      : void;
  };
  passportErrors: string[];
  setPassportErrors: Dispatch<React.SetStateAction<string[]>>;
}

export type LoanDescripitionProps = {
  loanName: string;
  resetLoanName: () => void;
};
