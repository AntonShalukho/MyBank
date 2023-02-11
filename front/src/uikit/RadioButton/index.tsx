import React from "react";

import classNames from "classnames";

import { Field } from "formik";

import "./RadioButtonStyles.css";

type RadioButtonProps = {
  name: string;
  label: string;
  value: string;
  className?: string;
};

export const RadioButton = ({
  name,
  label,
  value,
  className,
}: RadioButtonProps) => (
  <>
    <label className="radio-wrapper">
      <div className="radio-input-wrapper">
        <Field
          type="radio"
          name={name}
          value={value}
          className={classNames("radio-input", className)}
        />
      </div>
      <span className="radio-input-label">{label}</span>
    </label>
  </>
);
