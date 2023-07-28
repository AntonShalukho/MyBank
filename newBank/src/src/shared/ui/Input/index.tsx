import React, { InputHTMLAttributes, useEffect, useRef, useState } from "react";

import classNames from "classnames";

import { Field, useField } from "formik";

import { length } from "ramda";

import {
  getInputClassNames,
  getLabelClassNames,
  getWrapperClassNames,
} from "./lib/utils";

import { HideIcon, ClearInputIcon, HideFlashIcon } from "./assets/icons";

import { InputProps } from "./types";

import { ErrorsList } from "./components/ErrorsList";

import styles from "./Input.module.scss";

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
        />
        {length(field.value) > 0 && (
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
