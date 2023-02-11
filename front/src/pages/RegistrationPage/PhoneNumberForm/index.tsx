import React, { useRef, useState } from "react";

import { FormattedMessage, useIntl } from "react-intl";

import { Formik, Form } from "formik";

import * as yup from "yup";

import { Link } from "react-router-dom";

import { Button } from "../../../uikit/Button";

import { setPhoneNum, getIsClient } from "../../../redux/actions/userActions";

import { useTypedDispatch } from "../../../redux/store/store";

import { phoneRegex } from "../../../regexs";

import { FormPropsInterface } from "../../types";

import { config } from "../../../config/config";

import { PhoneNumberInput } from "../../../components/PhoneNumberInput";

import { Error } from "../../../uikit/Error";

import "./PhoneNumberFormStyles.css";

const PHONE_ALREADY_REGISTERED =
  "Client already exists and registered. Try to recover your credentials or contact the administration";

export const phoneValidationSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .matches(phoneRegex, "phoneValidation")
    .required("phoneRequired"),
});

export const PhoneNumberForm = ({ onSuccessSubmit }: FormPropsInterface) => {
  const dispatch = useTypedDispatch();
  const [alreadyRegisteredError, setAlreadyRegisteredError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const intl = useIntl();
  const ref = useRef<HTMLInputElement | null>(null);

  const getCleanPhone = (phoneNumber: string) =>
    phoneNumber.replace(/[^0-9]/gi, "");

  const handleSubmit = (phoneNum: string) => {
    setIsLoading(true);
    dispatch(getIsClient(phoneNum))
      .then(() => {
        setAlreadyRegisteredError(false);
        dispatch(setPhoneNum(phoneNum));
        onSuccessSubmit();
      })
      .catch((err) => {
        err.response.data.message === PHONE_ALREADY_REGISTERED &&
          setAlreadyRegisteredError(true);
      })
      .finally(() => setIsLoading(false));
  };
  const inputHandler = () => {
    setAlreadyRegisteredError(false);
  };
  return (
    <Formik
      initialValues={{
        phoneNumber: "",
      }}
      validationSchema={phoneValidationSchema}
      validateOnBlur={true}
      validateOnChange={false}
      onSubmit={({ phoneNumber }) => {
        handleSubmit(getCleanPhone(phoneNumber));
      }}
    >
      {({ setFieldValue, setErrors }) => (
        <Form className="phone-num-form">
          <div className="phone-num-input-wrapper">
            <PhoneNumberInput
              name="phoneNumber"
              label={intl.formatMessage({ id: "enterPhoneNumber" })}
              ref={ref}
              setErrors={setErrors}
              setFieldValue={setFieldValue}
              inputHandler={inputHandler}
              errors={
                alreadyRegisteredError ? ["phoneAlreadyRegistered"] : undefined
              }
            />
          </div>

          {alreadyRegisteredError && (
            <>
              <Link to="/" className="registered-client-login-link">
                <Button className="registration-button">
                  <FormattedMessage id="logInTitle" />
                </Button>
              </Link>
            </>
          )}
          <div className="phone-num-form-agreement-box">
            <p>
              <FormattedMessage id="servicesAgreement" />
              <a href={config.api.confidentialityPolicyUrl}>
                {" "}
                <FormattedMessage id="confidentialityPolicy" />
              </a>{" "}
              <FormattedMessage id="and" />{" "}
              <a href={config.api.onlineBankingServicesUrl}>
                <FormattedMessage id="rulesBanking" />
              </a>
            </p>
          </div>
          <Button
            variant="form"
            isLoading={isLoading}
            type="submit"
            disabled={isLoading}
            onClick={() => ref.current?.focus()}
          >
            <FormattedMessage id="continue" />
          </Button>
        </Form>
      )}
    </Formik>
  );
};
