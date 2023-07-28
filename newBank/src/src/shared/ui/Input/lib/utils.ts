import styles from "../Input.module.scss";

type InputHandlesType = {
  wrapperRef: React.RefObject<HTMLDivElement>;
  labelRef: React.RefObject<HTMLLabelElement>;
};

export const addClassNamesOnFocus = ({
  wrapperRef,
  labelRef,
}: InputHandlesType): void => {
  if (wrapperRef.current) {
    wrapperRef.current.classList.add(styles.wrapper_short_focus);
  }
  if (labelRef.current) {
    labelRef.current.classList.add(styles.label_focus);
  }
};

export const removeClassNamesOnBlur = ({
  wrapperRef,
  labelRef,
}: InputHandlesType): void => {
  if (wrapperRef.current) {
    wrapperRef.current.classList.remove(styles.wrapper_short_focus);
  }
  if (labelRef.current) {
    labelRef.current.classList.remove(styles.label_focus);
  }
};

export const getWrapperClassNames = (error: boolean, variant: string) => [
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
