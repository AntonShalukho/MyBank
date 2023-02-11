import React, {
  FormEvent,
  useState,
  KeyboardEvent,
  forwardRef,
  MutableRefObject,
} from "react";

import { FormikErrors } from "formik";

import { Input } from "../../uikit/Input";

import {
  format,
  getCaretPositions,
  maskHandler,
  MaskOptionsType,
} from "../../utils/maskHandlers";

const PHONE_MASK_SYMBOL = "X";
export const PATTERN = "+375 XX XXX-XX-XX";
const caretPositions = getCaretPositions(PATTERN, PHONE_MASK_SYMBOL);
const maskOptions: MaskOptionsType = {
  maskSymbol: PHONE_MASK_SYMBOL,
  pattern: PATTERN,
  caretPositions,
};

type PhoneInputNumberProps = {
  name: string;
  label: string;
  className?: string;
  errors?: string[];
  inputHandler?: () => void;
  setErrors: (
    errors: FormikErrors<{
      phoneNumber: string;
    }>
  ) => void;
  setFieldValue: (
    field: string,
    value: string,
    shouldValidate?: boolean | undefined
  ) => void;
};

export const PhoneNumberInput = forwardRef(
  (
    {
      name,
      className,
      label,
      setErrors,
      setFieldValue,
      inputHandler,
      errors,
    }: PhoneInputNumberProps,
    ref
  ) => {
    const [startValue, setStartValue] = useState(PATTERN);
    const [mask, setMask] = useState("");
    const [back, setBack] = useState(false);
    const [prevInputValue, setPrevInputValue] = useState<string | null>(null);
    const onInput = (event: FormEvent<HTMLInputElement>) => {
      format(ref as MutableRefObject<HTMLInputElement>, back, maskOptions);
      const { value } = event.currentTarget;
      if (value === prevInputValue) return;
      setPrevInputValue(value);
      inputHandler && inputHandler();
      setErrors({});
      setBack(false);
      setMask(`+375 ${maskHandler(value.slice(4), PHONE_MASK_SYMBOL)}`);
      setStartValue(value);
    };

    const onFocus = (event: FormEvent<HTMLInputElement>) => {
      format(ref as MutableRefObject<HTMLInputElement>, back, maskOptions);
      setBack(false);
      const { value } = event.currentTarget;
      setFieldValue("phoneNumber", startValue);
      setMask(`+375 ${maskHandler(value.slice(4), PHONE_MASK_SYMBOL)}`);
      setTimeout(() => {
        !mask || mask.length === 5
          ? (
              ref as MutableRefObject<HTMLInputElement>
            ).current!.setSelectionRange(5, 5)
          : (
              ref as MutableRefObject<HTMLInputElement>
            ).current!.setSelectionRange(mask.length - 1, mask.length - 1);
      }, 0);
    };

    const onBlur = (event: FormEvent<HTMLInputElement>) => {
      const { value } = event.currentTarget;
      if (value === PATTERN) {
        setFieldValue("phoneNumber", "");
        setMask(``);
      }
    };

    const onKeyDown = ({ key }: KeyboardEvent<HTMLInputElement>): void =>
      setBack(key === "Backspace");

    return (
      <div className="phone-num-input-wrapper">
        <Input
          name={name}
          label={label}
          className={`phone-input ${className}`}
          onInput={onInput}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          errors={errors}
          ref={ref}
          onBlur={onBlur}
        />
        <p className="mask">
          {(ref as MutableRefObject<HTMLInputElement>).current?.value
            ? mask
            : ""}
        </p>
      </div>
    );
  }
);
