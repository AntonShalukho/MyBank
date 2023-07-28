import { useRef, useState } from "react";

import { Form, Formik } from "formik";

import * as yup from "yup";

import { useIntl } from "react-intl";

import { useNavigate } from "react-router";

import { Input } from "../../../../uikit_v2/Input";

import { Button } from "../../../../uikit_v2/Button";

import { Popup } from "../../../../components_v2/Popup";

import { ConfirmationForm } from "../../../../components_v2/ConfirmationForm";

import { MAIN_PAGE_PATH, SIGN_UP_PATH } from "../../../../utils/variables";

import styles from "./LoginPageForm.module.css";

import { emailsRegExp, passwordRegExp } from "../../../../regexs";

import { setCookie } from "../../../../utils/cookieHandlers";

import {
  SendLoginDataType,
  sendLoginData,
} from "../../../../services/api/sendLoginData";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object().shape({
  email: yup.string().matches(emailsRegExp, { message: " " }).required(" "),
  password: yup
    .string()
    .matches(
      passwordRegExp,
      "latin, must contain at least 12 symbols, one capital letter, one special symbol, one digit"
    )
    .required(" "),
});

export const LoginPageForm = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const [isConfirmation, setIsConfirmation] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleConfirmation = (): void => {
    setIsConfirmation(!isConfirmation);
  };

  const handleSubmit = (values: SendLoginDataType) => {
    const requestBody = {
      email: values.email,
      password: values.password,
    };
    sendLoginData(requestBody)
      .then((data) => {
        setCookie("uuid", data.uuid);
        handleConfirmation();
      })
      .catch((err) => err);
  };

  const handleSignUpClick = () => {
    navigate(SIGN_UP_PATH);
  };

  const handleConfirmationSubmit = () => {
    navigate("/");
    handleConfirmation();
  };

  const resendVerifyCode = () => {
    handleConfirmation();
    buttonRef.current?.click();
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        {intl.formatMessage({ id: "logInTitle" })}
      </h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isValid, dirty, setFieldError }) => (
          <Form className={styles.form}>
            <div className={styles.inputWrapper}>
              <Input
                name="email"
                variant="long"
                label={intl.formatMessage({ id: "loginPageEmailInput" })}
                handleFocus={() => setFieldError("email", "")}
                maxLength={100}
              />
              <Input
                name="password"
                variant="password"
                label={intl.formatMessage({ id: "loginPagePasswordInput" })}
                handleFocus={() => setFieldError("password", "")}
                maxLength={50}
              />
              <Button
                ref={buttonRef}
                type="submit"
                variant="primarySmall"
                className={styles.button}
                disabled={!isValid || !dirty}
              >
                {intl.formatMessage({ id: "continue" })}
              </Button>
            </div>
            <p className={styles.subtitle}>
              {intl.formatMessage({ id: "dontHaveAccountQuestion" })}
            </p>
            <Button
              type="button"
              variant="secondarySmall"
              className={styles.button_secondary}
              onClick={handleSignUpClick}
            >
              {intl.formatMessage({ id: "signUp" })}
            </Button>
          </Form>
        )}
      </Formik>
      {isConfirmation && (
        <Popup className={styles.backdrop}>
          <ConfirmationForm
            onClose={handleConfirmation}
            onSuccessResponse={handleConfirmationSubmit}
            resendVerifyCode={resendVerifyCode}
          />
        </Popup>
      )}
    </div>
  );
};
