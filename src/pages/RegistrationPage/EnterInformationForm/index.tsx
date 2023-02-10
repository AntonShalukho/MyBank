import React, { FormEvent, RefObject, useRef } from "react";

import { Formik, Form, FormikErrors } from "formik";

import { FormattedMessage, useIntl } from "react-intl";

import { Button } from "../../../uikit/Button";

import { Input } from "../../../uikit/Input";

import { Error } from "../../../uikit/Error";

import { RadioButton } from "../../../uikit/RadioButton";

import { FormPropsInterface } from "../../types";

import { infoNameRegExp, passportRegEx } from "../../../regexs";

import { validationSchema, getErrors } from "./validation";

import { useTypedDispatch } from "../../../redux/store/store";

import { setPersonalInfo } from "../../../redux/actions/userActions";

import "./EnterInformationFormStyles.css";

type EnterInformationValues = {
  [key: string]: string;
};

type EnterInformationFormRefsType = {
  [key: string]: RefObject<HTMLInputElement>;
};

type FormikValidateForm = () => Promise<
  FormikErrors<{
    firstName: string;
    middleName: string;
    lastName: string;
    passportNumber: string;
    isUsResident: string;
  }>
>;

type SetErrorsType = (errors: FormikErrors<EnterInformationValues>) => void;

export const EnterInformationForm = ({
  onSuccessSubmit,
}: FormPropsInterface) => {
  const intl = useIntl();
  const dispatch = useTypedDispatch();
  const [firstNameRef, middleNameRef, lastNameRef, passportNumberRef] = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const enterInformationFormRefs: EnterInformationFormRefsType = {
    firstName: firstNameRef,
    middleName: middleNameRef,
    lastName: lastNameRef,
    passportNumber: passportNumberRef,
  };

  const handleInput = (
    event: FormEvent<HTMLInputElement>,
    fieldName: string,
    errors: FormikErrors<EnterInformationValues>,
    setErrors: SetErrorsType
  ): void => {
    setErrors({ ...errors, [fieldName]: "" });
  };

  const handleButtonClick = (validateForm: FormikValidateForm) => {
    validateForm().then((errors) =>
      enterInformationFormRefs[Object.keys(errors)[0]]?.current?.focus()
    );
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        middleName: "",
        lastName: "",
        passportNumber: "",
        isUsResident: "",
      }}
      onSubmit={(values, { resetForm }) => {
        dispatch(setPersonalInfo(values));
        resetForm();
        onSuccessSubmit();
      }}
      validateOnChange={false}
      validationSchema={validationSchema}
    >
      {({ values, setErrors, errors, touched, validateForm }) => (
        <Form className="form-inputs-wrapper">
          <div className="first-middle-wrapper">
            <Input
              name="firstName"
              label={intl.formatMessage({ id: "firstName" })}
              errors={getErrors(values.firstName, infoNameRegExp)}
              onInput={(event) =>
                handleInput(event, "firstName", errors, setErrors)
              }
              ref={firstNameRef}
            />
            <Input
              name="middleName"
              label={intl.formatMessage({ id: "middleName" })}
              belowLabel={
                !getErrors(values.middleName, infoNameRegExp)
                  ? intl.formatMessage({ id: "optional" })
                  : undefined
              }
              errors={getErrors(values.middleName, infoNameRegExp)}
              onInput={(event) =>
                handleInput(event, "middleName", errors, setErrors)
              }
              ref={middleNameRef}
            />
          </div>
          <Input
            name="lastName"
            label={intl.formatMessage({ id: "lastName" })}
            errors={getErrors(values.lastName, infoNameRegExp)}
            onInput={(event) =>
              handleInput(event, "lastName", errors, setErrors)
            }
            ref={lastNameRef}
          />
          <Input
            name="passportNumber"
            label={intl.formatMessage({ id: "passportNumber" })}
            errors={getErrors(values.passportNumber, passportRegEx)}
            onInput={(event) =>
              handleInput(event, "passportNumber", errors, setErrors)
            }
            ref={passportNumberRef}
          />
          <div className="residency-block">
            <div
              role="group"
              aria-labelledby="personal-info-radio-group"
              className="personal-info-resident-inputs"
            >
              <RadioButton
                name="isUsResident"
                value="true"
                label={intl.formatMessage({ id: "usResident" })}
              />
              <RadioButton
                name="isUsResident"
                value="false"
                label={intl.formatMessage({ id: "usNonResident" })}
              />
            </div>
            {!values.isUsResident && touched.isUsResident && (
              <Error errorMessageId="residencyRequired" />
            )}
          </div>
          <Button
            variant="form"
            type="submit"
            onClick={() => handleButtonClick(validateForm)}
          >
            <FormattedMessage id="continueButtonText" />
          </Button>
        </Form>
      )}
    </Formik>
  );
};
