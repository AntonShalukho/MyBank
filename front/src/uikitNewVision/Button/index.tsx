import React, { DOMAttributes } from "react";

import classNames from "classnames";

import { Spinner } from "../Spinner";

import styles from "./Button.module.css";

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
  find: styles.find_out_button,
  apply: styles.apply_button,
  applyDescription: styles.apply_description_button,
  form: styles.form_button,
  dropdown: styles.dropdown_list_item_button,
  navigation: styles.tabNav_link,
  openAccountPlus: styles.open_account_plus,
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
        button_disabled: disabled,
      })}
      disabled={disabled}
      type={type || "button"}
      {...props}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};
