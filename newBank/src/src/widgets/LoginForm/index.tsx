import { useRef, useState } from "react";

import { Form, Formik } from "formik";

import { useIntl } from "react-intl";

import { useNavigate } from "react-router";

import { Input } from "src/shared/ui/Input";

import { Button } from "src/shared/ui/Button";

import { MAIN_PAGE_PATH, SIGN_UP_PATH } from "src/shared/consts";

import { setCookie } from "src/shared/lib/cookieHandlers";

import { sendLoginData } from "src/widgets/LoginForm/api/sendLoginData";

import { useSpinner } from "src/shared/lib/hooks/useSpinner";

import { initialValues, validationSchema } from "./lib/validation";

import { ConfirmationPopup } from "../ConfirmationPopup";

import { SendLoginDataType } from "./types";

import styles from "./LoginPageForm.module.scss";

export const LoginPageForm = () => {
  const { toggleSpinner } = useSpinner();
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
    toggleSpinner(true);
    sendLoginData(requestBody)
      .then((data) => {
        setCookie("uuid", data.uuid);
        handleConfirmation();
      })
      .catch((err) => err)
      .finally(() => toggleSpinner(false));
  };

  const handleSignUpClick = () => {
    navigate(SIGN_UP_PATH);
  };

  const handleConfirmationSubmit = () => {
    navigate(MAIN_PAGE_PATH);
    handleConfirmation();
  };

  const resendVerifyCode = () => {
    handleConfirmation();
    buttonRef.current?.click();
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        {intl.formatMessage({ id: "widget_logInTitle" })}
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
                label={intl.formatMessage({ id: "widget_loginPageEmailInput" })}
                handleFocus={() => setFieldError("email", "")}
                maxLength={100}
              />
              <Input
                name="password"
                variant="password"
                label={intl.formatMessage({
                  id: "widget_loginPagePasswordInput",
                })}
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
              {intl.formatMessage({ id: "widget_dontHaveAccountQuestion" })}
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
        <ConfirmationPopup
          onClose={handleConfirmation}
          onSuccessResponse={handleConfirmationSubmit}
          resendVerifyCode={resendVerifyCode}
        />
      )}
    </div>
  );
};
