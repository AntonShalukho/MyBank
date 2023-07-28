import React, { useRef, useState } from "react";

import { Form, Formik } from "formik";

import { useIntl } from "react-intl";

import { useNavigate } from "react-router";

import { Input } from "../../../../uikit_v2/Input";

import { Button } from "../../../../uikit_v2/Button";

import { Spinner } from "../../../../uikit_v2/Spinner";

import { getCookie, setCookie } from "../../../../utils/cookieHandlers";

import { sendSignUpRegistrationStep } from "../../../../services/api/sendSignUpRegistrationStep";

import { ResponseType } from "../../../../services/api/sendVerificationEmailCode";

import { VERIFICATION_REGISTRATION_STEP } from "../../../../utils/variables";

import { ConfirmationForm } from "../../../../components_v2/ConfirmationForm";

import { Popup } from "../../../../components_v2/Popup";

import { getSignUpNavigateLink } from "../StepConfig/getSignUpNavigateLink";

import { validationSchema } from "./validationShema";

import { InitialValuesType } from "./types";

import styles from "./SignUpStepTwo.module.css";

const initialValues: InitialValuesType = {
  name: "",
  surname: "",
  email: "",
  password: "",
  repeatedPassword: "",
};

export const SignUpStepTwo = () => {
  const [isConfirmation, setIsConfirmation] = useState<boolean>(false);
  const [isPopup, setIsPopup] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
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
      repeatedPassword: values.repeatedPassword,
    };
    setIsPopup(true);
    sendSignUpRegistrationStep(requestBody)
      .then((data) => {
        setCookie("uuid", data.uuid);
        if (data.Step.next === VERIFICATION_REGISTRATION_STEP) {
          handleConfirmation();
        } else {
          navigate(getSignUpNavigateLink(data.Step.next));
        }
      })
      .finally(() => setIsPopup(false));
  };

  const handleSuccessResponse = (data?: ResponseType) => {
    if (data) {
      setCookie("uuid", data.uuid);
      navigate(getSignUpNavigateLink(data.Step.next));
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
                label={intl.formatMessage({ id: "nameLabel" })}
                placeholder={intl.formatMessage({ id: "namePlaceholder" })}
                maxLength={100}
                handleFocus={() => setFieldError("name", "")}
              />

              <Input
                name="surname"
                variant="long"
                label={intl.formatMessage({ id: "surnameLabel" })}
                placeholder={intl.formatMessage({ id: "surnamePlaceholder" })}
                maxLength={100}
                handleFocus={() => setFieldError("surname", "")}
              />

              <Input
                name="email"
                variant="long"
                label={intl.formatMessage({ id: "emailLabel" })}
                placeholder={intl.formatMessage({
                  id: "emailPlaceholderStepTwo",
                })}
                maxLength={100}
                handleFocus={() => setFieldError("email", "")}
              />

              <Input
                name="password"
                variant="password"
                label={intl.formatMessage({ id: "passwordLabel" })}
                placeholder={intl.formatMessage({ id: "passwordPlaceholder" })}
                maxLength={50}
                handleFocus={() => setFieldError("password", "")}
              />

              <Input
                name="repeatedPassword"
                variant="password"
                label={intl.formatMessage({ id: "confirmPasswordLabel" })}
                placeholder={intl.formatMessage({
                  id: "confirmPasswordPlaceholder",
                })}
                maxLength={50}
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
        <Popup className={styles.backdrop}>
          <ConfirmationForm
            onClose={handleConfirmation}
            onSuccessResponse={handleSuccessResponse}
            resendVerifyCode={resendVerifyCode}
          />
        </Popup>
      )}
      {isPopup && (
        <Popup className={styles.backdrop}>
          <Spinner />
        </Popup>
      )}
    </div>
  );
};
