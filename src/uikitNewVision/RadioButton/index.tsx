import React from "react";

import classNames from "classnames";

import { Field } from "formik";

import styles from "./RadioButton.module.css";

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
    <label className={styles.radio_wrapper}>
      <div className={styles.radio_input_wrapper}>
        <Field
          type="radio"
          name={name}
          value={value}
          className={classNames(styles.radio_input, className)}
        />
      </div>
      <span className={styles.radio_input_label}>{label}</span>
    </label>
  </>
);
