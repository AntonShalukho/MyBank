import React, {
  FocusEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

import { Form, Formik, FormikErrors } from "formik";

import { FormattedMessage, useIntl } from "react-intl";

import * as yup from "yup";

import { useSelector } from "react-redux";

import classNames from "classnames";

import { SmsFormTimer } from "../SmsFormTimer";

import { Button } from "../../uikit/Button/index";

import { sendVerificationCode } from "../../services/api/sendVerificationCode";

import { useTypedDispatch } from "../../redux/store/store";

import { setSmsCode } from "../../redux/actions/userActions";

import { selectPhoneNum } from "../../redux/selectors/userSelectors";

import { config } from "../../config/config";

import { sendRegistrationTelegramRequest } from "../../services/api/sendRegistrationTelegramRequest";

import { Input } from "../../uikit/Input";

import {
  format,
  maskHandler,
  getCaretPositions,
  MaskOptionsType,
} from "../../utils/maskHandlers";

import { BlurHandler } from "../../pages/types";

import "./SmsFormStyles.css";

export type SetErrorsType = (
  errors: FormikErrors<{
    verificationCode: string;
  }>
) => void;

type SmsFormType = {
  onSuccessSubmit: () => void;
};

const formatPhoneNumber = (phone: string): string =>
  `+${phone.slice(0, 3)} ${phone.slice(3, 5)} ${phone.slice(5, 8)}
  ${phone.slice(8, 10)} ${phone.slice(10, 12)}`;

const wrongAttemptErrors = [
  "thirdWrongAttempt",
  "secondWrongAttempt",
  "firstWrongAttempt",
];

const SMS_MASK_SYMBOL = "*";
const SMS_PATTERN = "******";
const caretPositions = getCaretPositions(SMS_PATTERN, SMS_MASK_SYMBOL);
const maskOptions: MaskOptionsType = {
  maskSymbol: SMS_MASK_SYMBOL,
  pattern: SMS_PATTERN,
  caretPositions,
};

export const SmsForm = ({ onSuccessSubmit }: SmsFormType) => {
  const intl = useIntl();
  const ref = useRef<HTMLInputElement | null>(null);
  const dispatch = useTypedDispatch();
  const phoneNumber = useSelector(selectPhoneNum);
  const [errorClassName, setErrorClassName] = useState(false);
  const [enterAttempts, setEnterAttempts] = useState(3);
  const [mask, setMask] = useState("");
  const [back, setBack] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [prevInputValue, setPrevInputValue] = useState<string | null>(null);
  const SMSRegex = /^[0-9]+$/;

  const validationSchema = yup.object().shape({
    verificationCode: yup
      .string()
      .matches(SMSRegex, "smsValidation")
      .required("smsRequired"),
  });

  useEffect(() => {
    sendRegistrationTelegramRequest(phoneNumber);
  }, []);

  const onInput = (
    event: FormEvent<HTMLInputElement>,
    setErrors: SetErrorsType
  ): void => {
    format(ref, back, maskOptions);
    const { value } = event.currentTarget;
    if (value === prevInputValue) return;
    setPrevInputValue(value);
    setErrorClassName(false);
    setErrors({});
    setBack(false);
    setMask(maskHandler(value, SMS_MASK_SYMBOL));
  };

  const onFocus = (event: FocusEvent<HTMLInputElement>): void => {
    const { value } = event.currentTarget;
    setMask(maskHandler(value, SMS_MASK_SYMBOL) || SMS_PATTERN);
    format(ref, back, maskOptions);
    setBack(false);
  };

  const onBlur: BlurHandler = (e, handleBlur) => {
    const { value } = e.currentTarget;
    handleBlur(e);
    !value && setMask("");
  };

  return (
    <Formik
      initialValues={{
        verificationCode: "",
      }}
      validationSchema={validationSchema}
      validateOnChange={false}
      validateOnBlur={true}
      onSubmit={({ verificationCode }, { resetForm }) => {
        setIsLoading(true);
        setMask(SMS_PATTERN);
        resetForm();
        const verificationCodeCheckObject = { verificationCode, phoneNumber };
        dispatch(setSmsCode(verificationCode));
        sendVerificationCode(verificationCodeCheckObject)
          .then(onSuccessSubmit)
          .catch(() => {
            setErrorClassName(true);
            setEnterAttempts(enterAttempts - 1);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }}
    >
      {({ setErrors, values, handleBlur }) => (
        <Form className="sms-form">
          <p className="sms-notification_text">
            <FormattedMessage id="notificationText" />
            {` ${formatPhoneNumber(phoneNumber)}`}
          </p>
          <div className="sms-input-container">
            <Input
              type="tel"
              name="verificationCode"
              id="verificationCode"
              className="sms-input"
              label={intl.formatMessage({ id: "verificationCode" })}
              errors={
                errorClassName ? [wrongAttemptErrors[enterAttempts]] : undefined
              }
              ref={ref}
              onInput={(e) => onInput(e, setErrors)}
              onFocus={onFocus}
              onBlur={(e) => onBlur(e, handleBlur)}
              disabled={!enterAttempts}
              autoComplete="off"
            />

            {!!enterAttempts && (
              <p
                className={classNames("sms-mask", {
                  grayMask:
                    !values.verificationCode.length ||
                    values.verificationCode === SMS_PATTERN,
                })}
              >
                {mask}
              </p>
            )}
          </div>
          <SmsFormTimer
            phoneNumber={phoneNumber}
            enterAttempts={enterAttempts}
            codeUrl={config.api.registrationTelegramUrl}
            setErrorClassName={setErrorClassName}
            setEnterAttempts={setEnterAttempts}
          />
          <Button
            variant="form"
            type="submit"
            disabled={enterAttempts === 0 || isLoading}
            isLoading={isLoading}
            onClick={() => ref.current?.focus()}
          >
            <FormattedMessage id="continueButtonText" />
          </Button>
        </Form>
      )}
    </Formik>
  );
};
