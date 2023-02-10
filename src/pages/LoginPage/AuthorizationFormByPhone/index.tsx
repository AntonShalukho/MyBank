import React, { useRef, useState } from "react";

import { Formik, Form } from "formik";

import { FormattedMessage, useIntl } from "react-intl";

import { useNavigate } from "react-router";

import { useTypedDispatch } from "../../../redux/store/store";

import { logging } from "../../../redux/actions/userActions";

import { PasswordInput } from "../../../components/PasswordInput";

import { Button } from "../../../uikit/Button";

import { PhoneNumberInput } from "../../../components/PhoneNumberInput";

import { phoneValidationSchema } from "../../RegistrationPage/PhoneNumberForm";

import "./AuthorizationFormStyle.css";

export const AuthorizationFormByPhone = () => {
  const [isErrorFieldPhone, setIsErrorFieldPhone] = useState(false);
  const intl = useIntl();
  const ref = useRef<HTMLInputElement | null>(null);
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        phoneNumber: "",
        password: "",
      }}
      validationSchema={phoneValidationSchema}
      validateOnChange={false}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(false);

        const phoneNumber = values.phoneNumber.replace(/[^0-9]/gi, "");
        dispatch(logging(phoneNumber, values.password, "phone"))
          .then(() => {
            resetForm();
            navigate("/cabinet/main");
          })
          .catch(() => {
            setIsErrorFieldPhone(true);
          });
      }}
    >
      {({ setFieldValue, setErrors }) => (
        <Form className="login-form">
          <PhoneNumberInput
            name="phoneNumber"
            label={intl.formatMessage({ id: "phoneNumber" })}
            setFieldValue={setFieldValue}
            setErrors={setErrors}
            ref={ref}
            errors={isErrorFieldPhone ? [" "] : undefined}
          />
          <PasswordInput
            name="password"
            label={intl.formatMessage({ id: "password" })}
            errors={isErrorFieldPhone ? ["invalidLoginOrPassword"] : undefined}
            resetError={() => setIsErrorFieldPhone(false)}
          />
          <Button variant="form" type="submit">
            <span>
              <FormattedMessage id="logInTitle" />
            </span>
          </Button>
        </Form>
      )}
    </Formik>
  );
};
