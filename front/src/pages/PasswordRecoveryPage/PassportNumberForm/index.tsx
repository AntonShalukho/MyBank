import React, { useRef, useState } from "react";

import { Formik, Form } from "formik";

import { useIntl, FormattedMessage } from "react-intl";

import { Link } from "react-router-dom";

import {
  setPassportNumber,
  setPhoneNum,
} from "../../../redux/actions/userActions";

import { useTypedDispatch } from "../../../redux/store/store";

import { sendTelegramRequest } from "../../../services/api/sendTelegramRequest";

import { Button } from "../../../uikit/Button";

import { PassportNumberInput } from "../../../components/PassportNumberInput";

import { validationSchema } from "./ValidationSchema";

import { sendVerificationPassportNumberRequest } from "../../../services/api/sendVerificationPassportNumberRequest";

type PassportNumberFormProps = {
  onSuccessSubmit?: () => void;
};

export const PassportNumberForm: React.FC<PassportNumberFormProps> = ({
  onSuccessSubmit,
}) => {
  const intl = useIntl();
  const dispatch = useTypedDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [userNotFoundError, setUserNotFoundError] = useState(false);
  const [passportErrors, setPassportErrors] = useState<string[]>([]);
  const ref = useRef<HTMLInputElement | null>(null);
  const handleSubmitPassportNumberForm = (values: {
    passportNumber: string;
  }) => {
    if (passportErrors.length) return;
    setIsLoading(true);
    sendTelegramRequest(values.passportNumber)
      .then((data) => {
        dispatch(setPhoneNum(data.phoneNumber || ""));
      })
      .then(() => sendVerificationPassportNumberRequest(values))
      .then(() => {
        setUserNotFoundError(false);
        dispatch(setPassportNumber(values.passportNumber));
        onSuccessSubmit && onSuccessSubmit();
      })
      .catch(() => {
        setUserNotFoundError(true);
        setPassportErrors(["passportNotFound"]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const inputHandler = () => {
    setUserNotFoundError(false);
  };

  return (
    <Formik
      initialValues={{
        passportNumber: "",
      }}
      validateOnChange={false}
      onSubmit={handleSubmitPassportNumberForm}
      validationSchema={validationSchema}
    >
      {({ setErrors, handleBlur }) => (
        <Form>
          <PassportNumberInput
            ref={ref}
            name="passportNumber"
            label={intl.formatMessage({ id: "passportNumberLabel" })}
            setErrors={setErrors}
            handleBlur={handleBlur}
            inputHandler={inputHandler}
            passportErrors={passportErrors}
            setPassportErrors={setPassportErrors}
          />
          <>
            {userNotFoundError && (
              <>
                <Button type="submit" className="registration-button">
                  <Link to="/registration">
                    <FormattedMessage id="registrationButton" />
                  </Link>
                </Button>
              </>
            )}

            <p className="passport-number-notification">
              <FormattedMessage id="passportNotification" />
            </p>
            <Button
              variant="form"
              disabled={isLoading}
              isLoading={isLoading}
              type="submit"
              onClick={() => ref.current?.focus()}
            >
              <FormattedMessage id="continueButtonText" />
            </Button>
          </>
        </Form>
      )}
    </Formik>
  );
};
