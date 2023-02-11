import React, {
  FocusEvent,
  forwardRef,
  InputHTMLAttributes,
  MutableRefObject,
  useRef,
  useState,
} from "react";

import classNames from "classnames";

import { useField } from "formik";

import { FormattedMessage } from "react-intl";

import { useCapsLock } from "../../utils/useCapsLock";

import { Input } from "../../uikit/Input";

import { Button } from "../../uikit/Button";

import close from "../../uikit/static/close.png";

import open from "../../uikit/static/open.png";

import "./PasswordInputStyles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  name: string;
  isRules?: boolean;
  errors?: string[];
  resetError?: () => void;
}
export const PasswordInput = forwardRef(
  (
    { label, className, name, isRules, errors, resetError }: InputProps,
    ref
  ) => {
    const [focused, setFocused] = useState(false);
    const [passwordMask, setPasswordMask] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [passwordType, setPasswordType] = useState("password");
    const [showRules, setShowRules] = useState(false);
    const [field, meta] = useField(name);
    const passwordContainerRef = useRef<HTMLDivElement>(null);
    const isCapsLockPressed = useCapsLock();

    const handleFocus = (): void => {
      setFocused(true);
      setShowRules(true);
    };

    const handleBlur = (e: FocusEvent<EventTarget>): void => {
      if (passwordContainerRef?.current?.contains(e.relatedTarget)) {
        return;
      }
      field.onBlur(e);
      setFocused(false);
      (ref as MutableRefObject<HTMLInputElement>)?.current.setSelectionRange(
        0,
        0
      );
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setPasswordMask(Array(value.length).fill("*").join(""));
      setPasswordValue(value);
      resetError && resetError();
    };

    const togglePassword = () => {
      passwordType === "password"
        ? setPasswordType("text")
        : setPasswordType("password");
    };
    const getErrorsArray = () => {
      const errorsArray = [];
      errors && errorsArray.push(...errors);
      isCapsLockPressed && focused && errorsArray.push("capsLock");
      return errorsArray;
    };
    const errorsArray = getErrorsArray();
    return (
      <div className="password-input-block" ref={passwordContainerRef}>
        <Input
          name={name}
          label={label}
          className={classNames(
            errors ? "input-error" : "",
            passwordType === "password" ? "stars-password-input" : "",
            className
          )}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onInput={handleInput}
          type={passwordType}
          maxLength={20}
          errors={errorsArray.length ? errorsArray : undefined}
          ref={ref}
          autoComplete="off"
        />
        {passwordMask ? (
          <span className="password-input-mask">
            {passwordType === "password" ? passwordMask : passwordValue}
          </span>
        ) : null}
        {isRules && showRules && !(meta.error && meta.touched) && (
          <p className="password-rules-text">
            <FormattedMessage id="passwordRules" />
          </p>
        )}
        {focused || field.value.length > 0 ? (
          <Button
            name={name}
            onClick={togglePassword}
            onBlur={handleBlur}
            className={
              (meta.error && meta.touched) ||
              (focused && isCapsLockPressed) ||
              errors?.length
                ? "right-padded pw-icon"
                : "pw-icon"
            }
          >
            {passwordType === "password" && <img src={close} alt="eye" />}
            {passwordType === "text" && <img src={open} alt="eye" />}
          </Button>
        ) : null}
      </div>
    );
  }
);
