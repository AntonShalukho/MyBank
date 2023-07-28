import classNames from "classnames";

import { Field } from "formik";

import styles from "./RadioButton.module.css";

export type RadioButtonProps = {
  name: string;
  label?: string;
  value: string;
  className?: string;
  children?: React.ReactNode;
};

export const RadioButton = ({
  name,
  label,
  value,
  className,
  children,
}: RadioButtonProps) => (
  <label className={classNames(styles.container, className)}>
    <Field type="radio" name={name} value={value} className={styles.input} />
    <div className={styles.content}>
      <span className={styles.span}>{label}</span>
      {children}
    </div>
  </label>
);
