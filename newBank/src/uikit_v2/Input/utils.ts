import styles from "./Input.module.css";

export const getWrapperClassNames = (error: boolean, variant?: string) => [
  {
    [styles.wrapper_error]: error,
  },
  {
    [styles.wrapper_error_icon]: error && variant !== "short",
  },
  {
    [styles.wrapper_long]: variant !== "short",
  },
  {
    [styles.wrapper_hide_icon]: variant === "long_With_Hide_Icon",
  },
];

export const getLabelClassNames = (variant: string) => [
  {
    [styles.label_long]: variant !== "short",
  },
  {
    [styles.label_hide_icon]: variant === "long_With_Hide_Icon",
  },
];
export const getInputClassNames = (variant: string) => [
  {
    [styles.input_long]: variant !== "short",
  },
  {
    [styles.input_hide_icon]: variant === "long_With_Hide_Icon",
  },
];
