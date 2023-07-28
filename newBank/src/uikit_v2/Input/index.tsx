import React, { InputHTMLAttributes, useEffect, useRef, useState } from "react";

import classNames from "classnames";

import { Field, useField } from "formik";

import { length } from "ramda";

import { Error } from "../Error";

import {
  getInputClassNames,
  getLabelClassNames,
  getWrapperClassNames,
} from "./utils";

import {
  HideIcon,
  ClearInputIcon,
  HideFlashIcon,
} from "../../components_v2/Icon";

import styles from "./Input.module.css";

export type VariantType = "short" | "long" | "long_With_Hide_Icon" | "password";

export type InputProps = {
  name: string;
  variant: VariantType;
  label?: string;
  counter?: React.ReactNode | string;
  isPermanentCounter?: boolean;
  errors?: string[];
  placeholder?: string;
  handleFocus?: () => void;
  handleBlur?: () => void;
  getAllowToInputRef?: (ref: React.RefObject<HTMLInputElement>) => void;
  countryFlagImg?: string;
  disabled?: boolean;
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
  variant,
  label,
  counter,
  isPermanentCounter,
  errors,
  placeholder,
  handleFocus,
  handleBlur,
  getAllowToInputRef,
  countryFlagImg,
  disabled,
  ...props
}) => {
  const [field, meta, helper] = useField(name);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isPassword, setIsPassword] = useState<boolean>(
    variant === "long_With_Hide_Icon" || variant === "password"
  );
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

  const handleHideIcon = () => {
    setIsPassword((prev) => !prev);
  };

  return (
    <div>
      <div
        className={classNames(
          styles.wrapper_short,
          ...getWrapperClassNames(isError, variant)
        )}
      >
        {label && (
          <label
            htmlFor={name}
            className={classNames(
              styles.label_short,
              ...getLabelClassNames(variant)
            )}
          >
            {label}
          </label>
        )}
        <Field
          innerRef={inputRef}
          className={classNames(
            styles.input_short,
            ...getInputClassNames(variant)
          )}
          onFocus={onFocus}
          type={isPassword ? "password" : "text"}
          placeholder={placeholder}
          {...field}
          {...props}
          onBlur={onBlur}
          startAdornment={<img src={countryFlagImg} alt="country flag" />}
          disabled={disabled}
        />
        {length(field.value) > 0 && !disabled && (
          <ClearInputIcon
            className={classNames({
              [styles.cross_long]: variant !== "short",
              [styles.cross_short]: variant === "short",
            })}
            onClick={handleCrossClick}
          />
        )}
        {variant === "long_With_Hide_Icon" &&
          !((meta.error || meta.touched) && errors) &&
          (isPassword ? (
            <HideFlashIcon
              className={styles.hide_icon}
              onClick={handleHideIcon}
            />
          ) : (
            <HideIcon className={styles.hide_icon} onClick={handleHideIcon} />
          ))}
      </div>
      {counter && (isPermanentCounter || isCounter) && (
        <div className={styles.counter}>Characters left: {counter}</div>
      )}
      <div className={styles.below_input_block}>
        {meta.error && meta.touched && <ErrorsList errors={meta.error} />}
        {errors ? <ErrorsList errors={errors} /> : null}
      </div>
    </div>
  );
};
