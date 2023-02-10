import React, { FocusEvent, FormEvent, useRef, useState } from "react";

import { FormattedMessage, useIntl } from "react-intl";

import { Form, Formik } from "formik";

import { useSelector } from "react-redux";

import { Button } from "../../../../uikit/Button";

import { Input } from "../../../../uikit/Input";

import { BlurHandler } from "../../../types";

import { SetErrorsType } from "../../../../components/SmsForm";

import { ExclamationPointIcon } from "../../../../components/Icons";

import { sendChangedEmail } from "../../../../services/api/notifications";

import {
  format,
  maskHandler,
  getCaretPositions,
  MaskOptionsType,
} from "../../../../utils/maskHandlers";

import { validationSchema } from "./NotificationValidationSchema";

import "./NotificationModalContentStyles.css";

type NotificationModalContentType = {
  onSuccessSubmit: () => void;
  onErrorSubmit: () => void;
  changedUserEmail: string;
};

export const NotificationModalContent = ({
  onSuccessSubmit,
  onErrorSubmit,
  changedUserEmail,
}: NotificationModalContentType) => {
  const intl = useIntl();
  const ref = useRef<HTMLInputElement | null>(null);
  const [errorClassName, setErrorClassName] = useState(false);
  const [mask, setMask] = useState("");
  const [back, setBack] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [prevInputValue, setPrevInputValue] = useState<string | null>(null);

  const SMS_MASK_SYMBOL = "*";
  const SMS_PATTERN = "******";
  const caretPositions = getCaretPositions(SMS_PATTERN, SMS_MASK_SYMBOL);
  const maskOptions: MaskOptionsType = {
    maskSymbol: SMS_MASK_SYMBOL,
    pattern: SMS_PATTERN,
    caretPositions,
  };

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
    <div className="notification-modal-content-wrapper">
      <ExclamationPointIcon className="notification-modal-content-exclamation-point-icon" />
      <p className="notification-modal-content-description">
        <FormattedMessage id="notificationModalContentDescription" />
      </p>
      <p className="notification-modal-content-warming">
        <FormattedMessage id="notificationModalContentWarming" />
      </p>
      <div>
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
            sendChangedEmail(changedUserEmail, verificationCode)
              .then(onSuccessSubmit)
              .catch(() => {
                setErrorClassName(true);
                onErrorSubmit();
              })
              .finally(() => {
                setIsLoading(false);
              });
          }}
        >
          {({ setErrors, handleBlur }) => (
            <Form className="sms-form">
              <div className="sms-input-container">
                <Input
                  type="tel"
                  name="verificationCode"
                  id="verificationCode"
                  className="sms-input"
                  label={intl.formatMessage({ id: "verificationCode" })}
                  ref={ref}
                  onInput={(e) => onInput(e, setErrors)}
                  onFocus={onFocus}
                  onBlur={(e) => onBlur(e, handleBlur)}
                  autoComplete="off"
                />
              </div>

              <Button
                className="notification-modal-content-btn"
                variant="form"
                type="submit"
                disabled={isLoading}
                isLoading={isLoading}
              >
                <FormattedMessage id="confirm" />
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
