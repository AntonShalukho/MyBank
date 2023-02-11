import React, { useRef, useState } from "react";

import { useNavigate } from "react-router";

import { Formik, Form } from "formik";

import { FormattedMessage, useIntl } from "react-intl";

import { logging } from "../../../redux/actions/userActions";

import { useTypedDispatch } from "../../../redux/store/store";

import { PasswordInput } from "../../../components/PasswordInput";

import { Button } from "../../../uikit/Button";

import { PassportNumberInput } from "../../../components/PassportNumberInput";

import { validationSchema } from "../../PasswordRecoveryPage/PassportNumberForm/ValidationSchema";

export const AuthorizationFormByID = () => {
  const [isErrorFieldID, setIsErrorFieldID] = useState(false);
  const [passportErrors, setPassportErrors] = useState<string[]>([]);
  const passportRef = useRef<HTMLInputElement>(null);
  const dispatch = useTypedDispatch();
  const intl = useIntl();
  const navigate = useNavigate();

  const focusHandler = () => {
    setIsErrorFieldID(false);
  };
  return (
    <Formik
      initialValues={{
        passportNumber: "",
        password: "",
      }}
      validationSchema={validationSchema}
      validateOnChange={false}
      validateOnBlur={true}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(false);
        dispatch(logging(values.passportNumber, values.password, "passport"))
          .then(() => {
            resetForm();
            navigate("/cabinet/main");
          })
          .catch(() => {
            setIsErrorFieldID(true);
            setPassportErrors([" "]);
          });
      }}
    >
      {({ setErrors, handleBlur }) => (
        <Form className="login-form">
          <PassportNumberInput
            ref={passportRef}
            name="passportNumber"
            label={intl.formatMessage({ id: "passportNumberLabel" })}
            setErrors={setErrors}
            handleBlur={handleBlur}
            focusHandler={focusHandler}
            passportErrors={passportErrors}
            setPassportErrors={setPassportErrors}
          />
          <PasswordInput
            name="password"
            label={intl.formatMessage({ id: "password" })}
            errors={isErrorFieldID ? ["invalidLoginOrPassword"] : undefined}
            resetError={() => setIsErrorFieldID(false)}
          />
          <Button variant="form" type="submit">
            <FormattedMessage id="logInTitle" />
          </Button>
        </Form>
      )}
    </Formik>
  );
};
