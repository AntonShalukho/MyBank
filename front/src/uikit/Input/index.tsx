import React, { forwardRef, InputHTMLAttributes } from "react";

import classNames from "classnames";

import { Field, useField } from "formik";

import { Error } from "../Error";

import "./InputStyles.css";

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
      <div className="form-input-wrapper">
        <div className="form-input-label-wrapper">
          <label
            htmlFor={name}
            className={
              field.value.length > 0
                ? "form-input-label-active"
                : "form-input-label"
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
              ? "form-input input-error"
              : "form-input"
          )}
          name={name}
          placeholder={label}
          {...props}
        />
        <div className="below-input-block">
          {belowLabel && !(meta.error && meta.touched) && (
            <p className="input-below-label">{belowLabel}</p>
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
