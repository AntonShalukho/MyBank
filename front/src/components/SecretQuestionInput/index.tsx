import React, { forwardRef } from "react";

import { useField } from "formik";

import { Input } from "../../uikit/Input";

import { SymbolTracker } from "../SymbolTracker";

import { secretQuestionRegex } from "../../regexs";

import "./SecretQuestionInputStyles.css";

interface SecretQuestionInputProps {
  label: string;
  name: string;
  resetError: () => void;
}

export const SecretQuestionInput = forwardRef(
  ({ name, label, resetError }: SecretQuestionInputProps, ref) => {
    const [field] = useField(name);
    const LENGTH_LIMIT = 50;
    const errors =
      field.value.length > 0 && !field.value.match(secretQuestionRegex)
        ? ["errorRestricted"]
        : undefined;

    const isTrackerShown = field.value.length > 0 && field.value.length <= 50;

    const handleInput = () => {
      resetError();
    };

    return (
      <div className="secret-question-input-wrapper">
        <Input
          name={name}
          className={
            field.value.length > 50 || errors
              ? "form-input input-error"
              : isTrackerShown
              ? "form-input form-input-tracked"
              : ""
          }
          label={label}
          errors={errors}
          onInput={handleInput}
          ref={ref}
        />
        {!errors || field.value.length > 50 ? (
          <SymbolTracker
            len={field.value.length}
            limit={LENGTH_LIMIT}
            errorMessage={
              name === "ownSecretQuestion"
                ? "errorFiftyCharsQuestion"
                : "errorFiftyCharsAnswer"
            }
          />
        ) : null}
      </div>
    );
  }
);
