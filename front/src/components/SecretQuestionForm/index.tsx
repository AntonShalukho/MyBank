import React, { ReactNode, RefObject, useRef, useState } from "react";

import { Formik, Form, FormikErrors } from "formik";

import * as yup from "yup";

import { FormattedMessage, useIntl } from "react-intl";

import { Button } from "../../uikit/Button";

import { Dropdown } from "../Dropdown";

import { Error } from "../../uikit/Error";

import { SecretQuestionInput } from "../SecretQuestionInput";

import "./SecretQuestionFormStyles.css";

export const DEFAULT_QUESTION = "enterOwnQuestion";

const questionList = [
  { id: 0, value: "mothersMaiden" },
  { id: 1, value: "bestFriend" },
  { id: 2, value: "faveBook" },
  { id: 3, value: "faveColor" },
  { id: 4, value: "faveDish" },
  { id: 5, value: "enterOwnQuestion" },
];

type SecretQuestionFormValues = {
  [field: string]: string;
};

type SecretQuestionFormRefsType = {
  [key: string]: RefObject<HTMLInputElement>;
};

type SecretQuestionFormProps = {
  onSubmit: (
    secretQuestion: string,
    secretQuestionAnswer: string
  ) => Promise<unknown>;
  children?: ReactNode;
};

export const SecretQuestionForm = ({
  onSubmit,
  children,
}: SecretQuestionFormProps) => {
  const intl = useIntl();
  const [chosenQuestion, setChosenQuestion] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const [isDropdownTouched, setIsDropdownTouched] = useState(false);
  const selectedQuestion = questionList[chosenQuestion]?.value;

  const [ownSecretQuestionRef, secretQuestionAnswerRef, dropdownRef] = [
    useRef(null),
    useRef(null),
    useRef<HTMLDivElement>(null),
  ];

  const secretQuestionFormRefs: SecretQuestionFormRefsType = {
    ownSecretQuestion: ownSecretQuestionRef,
    secretQuestionAnswer: secretQuestionAnswerRef,
  };

  const handleSelected = (id: number) => {
    setChosenQuestion(id);
  };

  const handleButtonClick = (
    errors: FormikErrors<SecretQuestionFormValues>
  ) => {
    setIsDropdownTouched(true);
    secretQuestionFormRefs[Object.keys(errors)[0]]?.current?.focus();
    if (chosenQuestion === -1) {
      dropdownRef?.current?.focus();
    }
  };

  const validationSchema =
    selectedQuestion === DEFAULT_QUESTION
      ? yup.object().shape({
          ownSecretQuestion: yup
            .string()
            .required("questionRequired")
            .max(50, ""),
          secretQuestionAnswer: yup
            .string()
            .required("answerRequired")
            .max(50, ""),
        })
      : yup.object().shape({
          secretQuestionAnswer: yup
            .string()
            .required("answerRequired")
            .max(50, ""),
        });
  return (
    <Formik
      initialValues={{
        ownSecretQuestion: "",
        secretQuestionAnswer: "",
      }}
      onSubmit={(
        { ownSecretQuestion, secretQuestionAnswer },
        { resetForm }
      ) => {
        if (chosenQuestion === -1) {
          return;
        }
        const secretQuestion =
          selectedQuestion === DEFAULT_QUESTION
            ? ownSecretQuestion
            : selectedQuestion;
        setIsLoading(true);
        onSubmit(secretQuestion, secretQuestionAnswer).finally(() =>
          setIsLoading(false)
        );
        resetForm();
      }}
      validateOnChange={false}
      validationSchema={validationSchema}
    >
      {({ setErrors, errors }) => (
        <Form className="secretQuestion-form">
          <div className="secretQuestion-dropdown-block">
            <Dropdown
              title={intl.formatMessage({ id: "chooseQuestion" })}
              items={questionList.map((question) => ({
                id: question.id,
                value: intl.formatMessage({ id: question.value }),
              }))}
              ref={dropdownRef}
              selectedOption={
                questionList[chosenQuestion] &&
                intl.formatMessage({ id: questionList[chosenQuestion].value })
              }
              getSelectedOption={handleSelected}
            />
            {!selectedQuestion && isDropdownTouched && (
              <Error errorMessageId="questionRequired" />
            )}
          </div>
          <div className="secret-question-inputs-block">
            {selectedQuestion === DEFAULT_QUESTION && (
              <SecretQuestionInput
                name="ownSecretQuestion"
                label={intl.formatMessage({ id: "enterOwnQuestion" })}
                resetError={() =>
                  setErrors({ ...errors, ownSecretQuestion: "" })
                }
                ref={ownSecretQuestionRef}
              />
            )}
            <SecretQuestionInput
              name="secretQuestionAnswer"
              label={intl.formatMessage({ id: "enterAnswer" })}
              resetError={() =>
                setErrors({ ...errors, secretQuestionAnswer: "" })
              }
              ref={secretQuestionAnswerRef}
            />
          </div>
          <div className="secret-question-buttons-block">
            <Button
              variant="form"
              type="submit"
              onClick={() => handleButtonClick(errors)}
              disabled={isLoading}
              isLoading={isLoading}
            >
              <FormattedMessage id="continue" />
            </Button>
            {children}
          </div>
        </Form>
      )}
    </Formik>
  );
};
