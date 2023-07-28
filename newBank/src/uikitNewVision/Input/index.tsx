import React, { forwardRef, InputHTMLAttributes } from "react";

import classNames from "classnames";

import { Field, useField } from "formik";

import { Error } from "../Error";

import styles from "./Input.module.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  className?: string;
  errors?: string[];
  belowLabel?: string;
}

type ErrorsListTypeProps = {
  errors: string[];
};

export const ErrorsList = ({ errors }: ErrorsListTypeProps) => (
  <>
    {errors.map((error) => (
      <Error key={error} errorMessageId={error} />
    ))}
  </>
);

export const Input = forwardRef(
  (
    { name, label, className, errors, belowLabel, ...props }: InputProps,
    ref
  ) => {
    const [field, meta] = useField(name);
    return (
      <div className={styles.form_input_wrapper}>
        <div className={styles.form_input_label_wrapper}>
          <label
            htmlFor={name}
            className={
              field.value.length > 0
                ? `${styles.form_input_label_active}`
                : `${styles.form_input_label}`
            }
          >
            {label}
          </label>
        </div>
        <Field
          innerRef={ref}
          className={classNames(
            className,
            (meta.error && meta.touched) || errors
              ? `${(styles.form_input, styles.input_error)}`
              : `${styles.form_input}`
          )}
          name={name}
          placeholder={label}
          {...props}
        />
        <div className={styles.below_input_block}>
          {belowLabel && !(meta.error && meta.touched) && (
            <p className={styles.input_below_label}>{belowLabel}</p>
          )}
          {meta.error && meta.touched && Array.isArray(meta.error) && (
            <ErrorsList errors={meta.error} />
          )}
          {meta.error && meta.touched && typeof meta.error === "string" && (
            <Error errorMessageId={meta.error} />
          )}
          {errors ? <ErrorsList errors={errors} /> : null}
        </div>
      </div>
    );
  }
);
