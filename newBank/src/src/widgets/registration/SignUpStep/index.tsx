import React, { useRef, useState } from "react";

import { Form, Formik } from "formik";

import { useIntl } from "react-intl";

import { useNavigate } from "react-router";

import { Input } from "src/shared/ui/Input";

import { Button } from "src/shared/ui/Button";

import { getCookie, setCookie } from "src/shared/lib/cookieHandlers";

import { VERIFICATION_REGISTRATION_STEP } from "src/shared/consts/Registration";

import { getSignUpNavigateLink } from "src/shared/lib/getSignUpNavigateLink";

import { ConfirmationPopup } from "src/widgets/ConfirmationPopup";

import { useSpinner } from "src/shared/lib/hooks/useSpinner";

import { validationSchema } from "./lib/validationScheme";

import { InitialValuesType, ResponseType } from "./types";

import { sendSignUpRegistrationStep } from "./api/sendSignUpRegistrationStep";

import { initialValues } from "./consts";

import styles from "./SignUpStep.module.scss";

export const SignUpStep = () => {
  const [isConfirmation, setIsConfirmation] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { toggleSpinner } = useSpinner();
  const navigate = useNavigate();
  const intl = useIntl();

  const handleConfirmation = (): void => {
    setIsConfirmation(!isConfirmation);
  };

  const handleSubmit = (values: InitialValuesType) => {
    const uuid = getCookie("uuid");
    const requestBody = {
      uuid: uuid || "",
      name: values.name,
      surname: values.surname,
      email: values.email,
      password: values.password,
    };
    toggleSpinner(true);
    sendSignUpRegistrationStep(requestBody)
      .then((data) => {
        setCookie("uuid", data.uuid);
        if (data.Step.next === VERIFICATION_REGISTRATION_STEP) {
          handleConfirmation();
        } else {
          data.Step.next && navigate(getSignUpNavigateLink(data.Step.next));
        }
      })
      .finally(() => toggleSpinner(false));
  };

  const handleSuccessResponse = (data?: ResponseType) => {
    if (data) {
      setCookie("uuid", data.uuid);
      data.Step.next && navigate(getSignUpNavigateLink(data.Step.next));
      handleConfirmation();
    }
  };

  const resendVerifyCode = () => {
    handleConfirmation();
    buttonRef.current?.click();
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{intl.formatMessage({ id: "signUp" })}</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isValid, setFieldError, dirty }) => (
          <Form>
            <div className={styles.inputs_container}>
              <Input
                name="name"
                variant="long"
                label={intl.formatMessage({ id: "name" })}
                placeholder={intl.formatMessage({
                  id: "widget_namePlaceholder",
                })}
                maxLength={100}
                handleFocus={() => setFieldError("name", "")}
              />

              <Input
                name="surname"
                variant="long"
                label={intl.formatMessage({ id: "surname" })}
                placeholder={intl.formatMessage({
                  id: "widget_surnamePlaceholder",
                })}
                maxLength={100}
                handleFocus={() => setFieldError("surname", "")}
              />

              <Input
                name="email"
                variant="long"
                label={intl.formatMessage({ id: "email" })}
                placeholder={intl.formatMessage({
                  id: "widget_emailPlaceholder",
                })}
                maxLength={100}
                handleFocus={() => setFieldError("email", "")}
              />

              <Input
                name="password"
                variant="password"
                label={intl.formatMessage({ id: "password" })}
                placeholder={intl.formatMessage({
                  id: "widget_passwordPlaceholder",
                })}
                maxLength={100}
                handleFocus={() => setFieldError("password", "")}
              />

              <Input
                name="confirmPassword"
                variant="password"
                label={intl.formatMessage({ id: "password" })}
                placeholder={intl.formatMessage({
                  id: "widget_confirmPasswordPlaceholder",
                })}
                maxLength={100}
                handleFocus={() => setFieldError("confirmPassword", "")}
              />
            </div>
            <Button
              ref={buttonRef}
              type="submit"
              className={styles.button}
              variant="primarySmall"
              disabled={!isValid || !dirty}
            >
              {intl.formatMessage({ id: "confirm" })}
            </Button>
          </Form>
        )}
      </Formik>
      {isConfirmation && (
        <ConfirmationPopup
          onClose={handleConfirmation}
          onSuccessResponse={handleSuccessResponse}
          resendVerifyCode={resendVerifyCode}
        />
      )}
    </div>
  );
};
