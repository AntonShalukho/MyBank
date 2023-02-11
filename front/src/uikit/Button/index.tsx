import React, { DOMAttributes } from "react";

import classNames from "classnames";

import { Spinner } from "../Spinner";

import "./ButtonStyles.css";

export type ButtonType = "button" | "submit" | "reset";

export type VariantType =
  | "form"
  | "dropdown"
  | "navigation"
  | "apply"
  | "find"
  | "applyDescription"
  | "openAccountPlus";

export interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
  variant?: VariantType;
  className?: string;
  disabled?: boolean;
  type?: ButtonType;
  isLoading?: boolean;
  name?: string;
  id?: string;
}
const variants = {
  find: "find-out-button",
  apply: "apply-button",
  applyDescription: "apply-description-button",
  form: "form-button",
  dropdown: "dropdown-list-item--button",
  navigation: "tabNav__link",
  openAccountPlus: "open-account-plus",
};
export const Button: React.FC<IButtonProps> = ({
  variant,
  children,
  disabled,
  className = "",
  type,
  isLoading,
  name,
  ...props
}) => {
  const buttonClass = variant ? `${variants[variant]} ${className}` : className;
  /* eslint-disable react/button-has-type */
  return (
    <button
      name={name}
      className={classNames(buttonClass, {
        button__disabled: disabled,
      })}
      disabled={disabled}
      type={type || "button"}
      {...props}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};
