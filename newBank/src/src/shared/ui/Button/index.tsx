import { DOMAttributes, MutableRefObject, forwardRef } from "react";

import classNames from "classnames";

import { Spinner } from "../Spinner";

import { ButtonProps } from "../../types/Button";

import { Variants } from "../../consts/Button";

import styles from "./Button.module.scss";

export const Button = forwardRef(
  (
    {
      variant,
      children,
      disabled,
      className = "",
      type,
      isLoading,
      name,
      ...props
    }: ButtonProps & DOMAttributes<HTMLButtonElement>,
    ref
  ) => {
    const buttonClass = variant
      ? `${styles[Variants[variant]]} ${className}`
      : className;
    /* eslint-disable react/button-has-type */
    return (
      <button
        ref={ref as MutableRefObject<HTMLButtonElement>}
        name={name}
        className={classNames(styles.default, buttonClass, {
          button__disabled: disabled,
        })}
        disabled={disabled}
        type={type || "button"}
        {...props}
      >
        {isLoading ? <Spinner /> : children}
      </button>
    );
  }
);
