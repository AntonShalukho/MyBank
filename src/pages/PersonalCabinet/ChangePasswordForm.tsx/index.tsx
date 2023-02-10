import React, { Dispatch, RefObject, useRef, useState } from "react";

import { Form, Formik, FormikErrors } from "formik";

import { FormattedMessage, useIntl } from "react-intl";

import { PasswordInput } from "../../../components/PasswordInput";

import { Button } from "../../../uikit/Button";

import { validationSchema } from "./ValidationSchema";

import { Modal } from "../../../components/Modal";

import { SuccessfulChange } from "../../../components/Icons";

import { sendPasswordChangeRequest } from "../../../services/api/security";

import "./ChangePasswordFormStyles.css";

const PASSWORD_NOT_MATCH = "Password not match";

type ChangePasswordFormProps = {
  setOption: Dispatch<React.SetStateAction<string | null>>;
};

type PasswordFormRefs = {
  [field: string]: RefObject<HTMLInputElement>;
};

type PasswordFormValues = {
  [field: string]: string;
};

export const ChangePasswordForm = ({ setOption }: ChangePasswordFormProps) => {
  const intl = useIntl();
  const [currPasswordRef, newPasswordRef, confirmPasswordRef] = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];
  const passwordFormRefs: PasswordFormRefs = {
    currentPassword: currPasswordRef,
    newPassword: newPasswordRef,
    confirmNewPassword: confirmPasswordRef,
  };
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMatchError, setIsMatchError] = useState(false);
  const cancelClickHandler = () => {
    setOption(null);
  };
  const closeModalHandler = () => {
    setOption(null);
    setIsModalOpen(false);
  };

  const handleButtonClick = (errors: FormikErrors<PasswordFormValues>) => {
    passwordFormRefs[Object.keys(errors)[0]]?.current?.focus();
  };

  const handleSubmit = (currentPassword: string, newPassword: string) => {
    setIsLoading(true);
    sendPasswordChangeRequest(currentPassword, newPassword)
      .then(() => {
        setIsModalOpen(true);
      })
      .catch((error) => {
        error.response.data === PASSWORD_NOT_MATCH && setIsMatchError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <>
      {isModalOpen && (
        <Modal
          onClose={closeModalHandler}
          backdrop={true}
          className="change-modal"
        >
          <>
            <SuccessfulChange />
            <FormattedMessage id="passwordChanged" />
          </>
        </Modal>
      )}
      <div className="change-password-container">
        <h4>
          <FormattedMessage id="toChangePassword" />
        </h4>
        <p>
          <FormattedMessage id="changePasswordInfo" />
        </p>
        <Formik
          initialValues={{
            currentPassword: "",
            newPassword: "",
            confirmNewPassword: "",
          }}
          validationSchema={validationSchema}
          validateOnChange={false}
          onSubmit={({ currentPassword, newPassword }) => {
            handleSubmit(currentPassword, newPassword);
          }}
        >
          {({ errors }) => (
            <Form className="change-password-form">
              <div className="password-inputs">
                <PasswordInput
                  name="currentPassword"
                  label={intl.formatMessage({ id: "enterCurrentPass" })}
                  errors={isMatchError ? ["matchError"] : undefined}
                  ref={currPasswordRef}
                />
                <PasswordInput
                  name="newPassword"
                  label={intl.formatMessage({ id: "createNewPass" })}
                  isRules={true}
                  ref={newPasswordRef}
                />
                <PasswordInput
                  name="confirmNewPassword"
                  label={intl.formatMessage({ id: "confirmNewPass" })}
                  ref={confirmPasswordRef}
                />
              </div>
              <div className="change-password-buttons">
                <Button
                  onClick={() => handleButtonClick(errors)}
                  variant="form"
                  type="submit"
                  className="change-button submit-btn"
                  disabled={isLoading}
                  isLoading={isLoading}
                >
                  <FormattedMessage id="continueButtonText" />
                </Button>
                <Button
                  onClick={cancelClickHandler}
                  variant="form"
                  type="reset"
                  className="change-button reset-btn"
                >
                  <FormattedMessage id="cancel" />
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
