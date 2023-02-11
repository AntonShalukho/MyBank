import React, { RefObject, useRef, useState } from "react";

import { FormattedMessage, useIntl } from "react-intl";

import { Form, Formik, FormikErrors } from "formik";

import { ExclamationPointIcon } from "../../../../components/Icons";

import { SecretQuestionInput } from "../../../../components/SecretQuestionInput";

import { validationSchema } from "./validationSchema";

import "./PasswordChangeFormStyles.css";

type SecretQuestionFormValues = {
  [field: string]: string;
};

type SecretQuestionFormRefsType = {
  [key: string]: RefObject<HTMLInputElement>;
};

type PasswordChangeFormType = {
  onClose: () => void;
};

const wrongAttemptErrors = [
  "thirdWrongSecretAnswer",
  "secondWrongSecretAnswer",
  "firstWrongSecretAnswer",
];

const SECRET_ANSWER = "test";

export const PasswordChangeForm = ({ onClose }: PasswordChangeFormType) => {
  const intl = useIntl();
  const secretQuestionAnswerRef = useRef(null);

  const [attempts, setAttempts] = useState(3);
  const [secretAnswer, setSecretAnswer] = useState("");

  const handleSubmit = (item: string) => {
    if (item === SECRET_ANSWER) {
      setSecretAnswer(item);
      onClose();
    }
    if (attempts > 0 && secretAnswer !== SECRET_ANSWER) {
      setAttempts((prev) => prev - 1);
      setSecretAnswer(item);
    }
  };

  const secretQuestionFormRefs: SecretQuestionFormRefsType = {
    secretQuestionAnswer: secretQuestionAnswerRef,
  };

  const handleButtonClick = (
    errors: FormikErrors<SecretQuestionFormValues>
  ) => {
    secretQuestionFormRefs[Object.keys(errors)[0]]?.current?.focus();
  };

  return (
    <>
      <ExclamationPointIcon className="password-change-form-icon" />
      <h1 className="password-change-form-title">
        <FormattedMessage id="changePassword" />
      </h1>
      <p className="password-change-form-description">
        <FormattedMessage id="secretAnswerDescription" />
      </p>
      <div className="password-change-form-attempts">
        <FormattedMessage id="secretAnswerWarning" />
        {` ${attempts} `}
        <FormattedMessage id="attempts" />
      </div>
      <Formik
        initialValues={{
          secretQuestionAnswer: "",
        }}
        onSubmit={({ secretQuestionAnswer }, { resetForm }) => {
          resetForm();
          handleSubmit(secretQuestionAnswer);
        }}
        validateOnChange={false}
        validationSchema={validationSchema}
      >
        {({ setErrors, errors }) => (
          <Form className="password-change-form-secret-question">
            <div className="secret-question-inputs-wrapper">
              <SecretQuestionInput
                name="secretQuestionAnswer"
                label={intl.formatMessage({ id: "enterAnswer" })}
                resetError={() =>
                  setErrors({ ...errors, secretQuestionAnswer: "" })
                }
                ref={secretQuestionAnswerRef}
              />
              {attempts > 0 &&
                secretAnswer !== SECRET_ANSWER &&
                wrongAttemptErrors[attempts] !== undefined && (
                  <span className="secret-question-wrong-attempt-errors">
                    <FormattedMessage id={wrongAttemptErrors[attempts]} />
                  </span>
                )}
            </div>
            <div className="secret-question-buttons-wrapper">
              <button
                type="submit"
                onClick={() => handleButtonClick(errors)}
                className="secret-question-buttons-button primary"
              >
                <FormattedMessage id="change" />
              </button>
              <button
                className="secret-question-buttons-button secondary"
                type="button"
                onClick={onClose}
              >
                <FormattedMessage id="cancel" />
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
