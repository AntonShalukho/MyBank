import React, { FormEvent } from "react";

import classNames from "classnames";

import styles from "../SmsForm.module.css";

type SmsFormInputType = {
  handleVerificationCode: (value: string) => void;
  handleVerificationCodeBack: (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => void;
  handlePaste: (e: React.ClipboardEvent<HTMLInputElement>) => void;
  name: string;
  id: string;
  formikValue: string;
  isErrors: boolean;
};

export const SmsFormInput = React.forwardRef(
  (
    {
      handleVerificationCode,
      name,
      handlePaste,
      handleVerificationCodeBack,
      id,
      formikValue,
      isErrors,
    }: SmsFormInputType,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const handleChange = (e: FormEvent<HTMLInputElement>): void => {
      if (
        /\d/.test(e.currentTarget.value) &&
        e.currentTarget.value.length === 1
      ) {
        handleVerificationCode(e.currentTarget.value);
      }
    };
    const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
      handleVerificationCodeBack(e);
    };

    return (
      <input
        type="text"
        id={id}
        name={name}
        value={formikValue}
        className={classNames(styles.input, {
          [styles.input__error]: isErrors,
        })}
        ref={ref}
        onChange={handleChange}
        onPaste={handlePaste}
        onKeyDown={handleKey}
      />
    );
  }
);
