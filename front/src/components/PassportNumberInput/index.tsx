import React, { FocusEvent, FormEvent, forwardRef, useState } from "react";

import { passportRegEx } from "../../regexs";

import { Input } from "../../uikit/Input";

import { Error } from "../../uikit/Error";

import { useCapsLock } from "../../utils/useCapsLock";

import { PassportNumberInputProps } from "../../pages/types";

export const PassportNumberInput = forwardRef(
  (
    {
      setErrors,
      handleBlur,
      name,
      label,
      focusHandler,
      inputHandler,
      passportErrors,
      setPassportErrors,
    }: PassportNumberInputProps,
    ref
  ) => {
    const isCapsLockPressed = useCapsLock();
    const [isFocused, setIsFocused] = useState(false);
    const onInput = (event: FormEvent<HTMLInputElement>) => {
      const { value } = event.currentTarget;
      setErrors({});
      setPassportErrors([]);
      if (!passportRegEx.test(value)) {
        setPassportErrors((prev) => [...prev, "errorRestricted"]);
      }
      inputHandler && inputHandler();
    };

    const onFocus = () => {
      setIsFocused(true);
      focusHandler && focusHandler();
    };

    const onBlur = (event: FocusEvent<HTMLInputElement, Element>) => {
      setIsFocused(false);
      handleBlur(event);
    };
    return (
      <>
        <Input
          ref={ref}
          name={name}
          errors={passportErrors.length ? passportErrors : undefined}
          label={label}
          onInput={onInput}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {isCapsLockPressed && isFocused && <Error errorMessageId="capsLock" />}
      </>
    );
  }
);
