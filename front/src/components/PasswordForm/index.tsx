import React, { RefObject, useRef } from "react";

import { Formik, Form, FormikErrors } from "formik";

import * as yup from "yup";

import { FormattedMessage, useIntl } from "react-intl";

import { PasswordInput } from "../PasswordInput";

import { Button } from "../../uikit/Button";

import { useTypedDispatch } from "../../redux/store/store";

import { setPassword } from "../../redux/actions/userActions";

import { passwordRegExp } from "../../regexs";

import "./PasswordFormStyles.css";

type PasswordFormType = {
  onSuccessSubmit: (password: string) => void;
};

type PasswordFormValues = {
  [field: string]: string;
};

type PasswordFormRefs = {
  [field: string]: RefObject<HTMLInputElement>;
};

export const PasswordForm = ({ onSuccessSubmit }: PasswordFormType) => {
  const intl = useIntl();
  const dispatch = useTypedDispatch();
  const [passwordRef, confirmPasswordRef] = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];
  const passwordFormRefs: PasswordFormRefs = {
    password: passwordRef,
    confirmPassword: confirmPasswordRef,
  };

  const validationSchema = yup.object().shape({
    password: yup
      .string()
      .required("passwordRequired")
      .matches(passwordRegExp, "passwordRules"),
    confirmPassword: yup
      .string()
      .required("confirmPasswordRequired")
      .oneOf([yup.ref("password")], "passwordsNotMatch"),
  });

  const handleButtonClick = (errors: FormikErrors<PasswordFormValues>) => {
    passwordFormRefs[Object.keys(errors)[0]]?.current?.focus();
  };

  return (
    <Formik
      initialValues={{
        password: "",
        confirmPassword: "",
      }}
      onSubmit={(values) => {
        dispatch(setPassword(values.password));
        onSuccessSubmit(values.password);
      }}
      validateOnChange={false}
      validationSchema={validationSchema}
    >
      {({ setErrors, errors }) => (
        <Form>
          <div className="password-inputs">
            <PasswordInput
              name="password"
              label={intl.formatMessage({ id: "enterPassword" })}
              isRules={true}
              resetError={() => setErrors({ ...errors, password: "" })}
              ref={passwordRef}
            />
            <PasswordInput
              name="confirmPassword"
              label={intl.formatMessage({ id: "confirmPassword" })}
              resetError={() => setErrors({ ...errors, confirmPassword: "" })}
              ref={confirmPasswordRef}
            />
          </div>
          <Button
            className="password-form-btn"
            variant="form"
            type="submit"
            onClick={() => handleButtonClick(errors)}
          >
            <FormattedMessage id="continueButtonText" />
          </Button>
        </Form>
      )}
    </Formik>
  );
};
