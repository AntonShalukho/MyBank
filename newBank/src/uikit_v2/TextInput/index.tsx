import React, { InputHTMLAttributes, useEffect, useRef, useState } from "react";

import classNames from "classnames";

import { Field, useField } from "formik";

import { length } from "ramda";

import { Error } from "../Error";

import { getWrapperClassNames } from "../Input/utils";

import { ClearInputIcon } from "../../components_v2/Icon";

import styles from "./Input.module.css";

export type InputProps = {
  name: string;
  label?: string;
  counter?: React.ReactNode | string;
  errors?: string[];
  placeholder?: string;
  handleFocus?: () => void;
  handleBlur?: () => void;
  getAllowToInputRef?: (ref: React.RefObject<HTMLInputElement>) => void;
  inputClassName?: string;
  wrapperClassName?: string;
  countryFlagImg?: string;
};

type ErrorsListTypeProps = {
  errors: string[] | string;
};

export const ErrorsList = ({ errors }: ErrorsListTypeProps) => (
  <>
    {Array.isArray(errors)
      ? errors.map((error) => <Error key={error} errorMessageId={error} />)
      : typeof errors === "string" && <Error errorMessageId={errors} />}
  </>
);

export const Input: React.FC<
  InputProps &
    InputHTMLAttributes<HTMLInputElement> &
    React.RefAttributes<unknown>
> = ({
  name,
  label,
  counter,
  errors,
  placeholder,
  handleFocus,
  handleBlur,
  getAllowToInputRef,
  countryFlagImg,
  ...props
}) => {
  const [field, meta, helper] = useField(name);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isCounter, setIsCounter] = useState<boolean>(false);
  const isError = !!((meta.error && meta.touched) || errors);

  useEffect(() => {
    getAllowToInputRef && getAllowToInputRef(inputRef);
  }, [inputRef]);

  const onFocus = () => {
    setIsCounter(true);
    handleFocus && handleFocus();
  };

  const handleCrossClick = () => {
    helper.setValue("");
    onFocus();
    inputRef.current?.focus();
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsCounter(false);
    handleBlur && handleBlur();
    field.onBlur(e);
  };

  return (
    <div>
      <div
        className={classNames(
          styles.wrapper,
          ...getWrapperClassNames(isError),
          isError && styles.wrapper_error
        )}
      >
        {label && (
          <label htmlFor={name} className={classNames(styles.label)}>
            {label}
          </label>
        )}
        <Field
          innerRef={inputRef}
          className={classNames(styles.input)}
          onFocus={onFocus}
          type="text"
          placeholder={placeholder}
          {...field}
          {...props}
          onBlur={onBlur}
        />
        {length(field.value) > 0 && (
          <ClearInputIcon className={styles.cross} onClick={handleCrossClick} />
        )}
      </div>
      {counter && isCounter && (
        <div className={styles.counter}>Characters left: {counter}</div>
      )}
      <div className={styles.below_input_block}>
        {meta.error && meta.touched && <ErrorsList errors={meta.error} />}
        {errors ? <ErrorsList errors={errors} /> : null}
      </div>
    </div>
  );
};
