import React, { useEffect, useRef, useState } from "react";

import { useFormik } from "formik";

import { FormattedMessage } from "react-intl";

import { useLocation } from "react-router";

import { Button } from "src/shared/ui/Button";

import { getCookie } from "src/shared/lib/cookieHandlers";

import { useSpinner } from "src/shared/lib/hooks/useSpinner";

import { EmailFormTimer } from "../EmailFormTimer";

import { EmailFormInput } from "../EmailFormInput";

import { InputsConfigMap, initialEmailFormValues } from "../../consts";

import { useVerifyRefs } from "../../lib/useVerifyRefs";

import { ConfirmationFormType } from "../../types";

import { getVerifyHandler, getConfirmationCode } from "../../lib/utils";

import styles from "./EmailForm.module.scss";

export const EmailForm = ({
  onClose,
  onSuccessResponse,
  resendVerifyCode,
}: ConfirmationFormType) => {
  const [counter, setCounter] = useState<number>(0);
  const { pathname } = useLocation();
  const verifyHandler = getVerifyHandler(pathname);
  const counterRef = useRef<number>(0);
  const prevValue = useRef<string>("");
  const [isErrors, setIsErrors] = useState<boolean>(false);
  const [isCodeExpired, SetIsCodeExpired] = useState<boolean>(false);
  const [isVerifiedCode, SetIsVerifiedCode] = useState<boolean>(false);
  const { toggleSpinner } = useSpinner();

  const InputRefsMap = useVerifyRefs();

  const formik = useFormik({
    initialValues: initialEmailFormValues,
    validateOnChange: false,
    validate: (values) => {
      if (!isCodeExpired) {
        InputsConfigMap.forEach((value) => {
          if (values[value as keyof typeof values] === "") {
            setIsErrors(true);
          }
        });
      }
    },
    onSubmit: (values) => {
      if (isCodeExpired) {
        SetIsCodeExpired(false);
        SetIsVerifiedCode(false);
        formik.resetForm();
        InputRefsMap.firstInput.current?.focus();
        counterRef.current = 0;
        setCounter(0);
        resendVerifyCode();
      } else if (!isErrors) {
        toggleSpinner(true);
        const uuid = getCookie("uuid");
        const requestBody = {
          uuid: uuid as string,
          code: getConfirmationCode(values),
        };
        verifyHandler(requestBody)
          .then(
            (data) => {
              data && onSuccessResponse(data);
              onClose();
            },
            (err) => {
              if (err.response.status === 406) {
                SetIsVerifiedCode(true);
              } else {
                setIsErrors(true);
              }
            }
          )
          .catch(() => {
            throw new Error();
          })
          .finally(() => {
            toggleSpinner(false);
          });
      }
    },
  });

  useEffect(() => {
    InputRefsMap.firstInput.current?.focus();
  }, []);

  const setFormikValue = (index: number, value: string) => {
    formik.setFieldValue(InputsConfigMap[index], value);
  };

  const setFocus = (index: number) => {
    InputRefsMap[
      InputsConfigMap[index] as keyof typeof InputRefsMap
    ].current?.focus();
  };

  const handleVerificationCode = (value: string) => {
    setIsErrors(false);
    SetIsVerifiedCode(false);
    if (counter < 5 && /\d/.test(value)) {
      setFormikValue(counter, value);
      prevValue.current = value;
      setFocus(counter + 1);
      setCounter(counter + 1);
      counterRef.current += 1;
    } else if (counter === 5 && /\d/.test(value) && value.length === 1) {
      setFormikValue(counter, value);
      prevValue.current = value;
      counterRef.current += 1;
      setCounter(counter + 1);
    }
  };

  const handleVerificationCodeBack = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    setIsErrors(false);
    SetIsVerifiedCode(false);
    const ref =
      counter === 6
        ? InputRefsMap[
            InputsConfigMap[counter - 1] as keyof typeof InputRefsMap
          ]
        : InputRefsMap[InputsConfigMap[counter] as keyof typeof InputRefsMap];

    if (
      e.key === "Backspace" &&
      counter < 6 &&
      counter > 0 &&
      ref.current?.value === ""
    ) {
      setFormikValue(counter - 1, "");
      setFocus(counter - 1);
      setCounter(counter - 1);
      counterRef.current -= 1;
    }

    if (e.key === "Backspace" && counter === 6 && ref.current?.value !== "") {
      setFormikValue(counter - 1, "");
      setCounter(counter - 1);
      counterRef.current -= 1;
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    setIsErrors(false);
    SetIsVerifiedCode(false);
    const pasteValue = e.clipboardData.getData("text").split("");
    pasteValue.forEach((value) => {
      if (counterRef.current < 5 && /\d/.test(value)) {
        setFormikValue(counterRef.current, value);
        prevValue.current = value;
        setFocus(counterRef.current + 1);
        counterRef.current += 1;
      } else if (
        counterRef.current === 5 &&
        /\d/.test(value) &&
        value.length === 1
      ) {
        setFormikValue(counterRef.current, value);
        prevValue.current = value;
        counterRef.current += 1;
      }
    });
    setCounter(counterRef.current);
  };

  const handleCancel = () => {
    setIsErrors(false);
    onClose();
  };

  const handleDisabledButton = (): boolean => {
    let isDisabledButton = false;
    Object.values(formik.values).forEach((value) => {
      if (value === "") {
        isDisabledButton = true;
      }
    });
    return isDisabledButton;
  };

  return (
    <form className={styles.email_form} onSubmit={formik.handleSubmit}>
      <div className={styles.inputs}>
        {InputsConfigMap.map((value, index) => (
          <EmailFormInput
            key={value}
            id={InputsConfigMap[index]}
            name={InputsConfigMap[index]}
            formikValue={
              formik.values[
                InputsConfigMap[index] as keyof typeof formik.values
              ]
            }
            handleVerificationCode={handleVerificationCode}
            handleVerificationCodeBack={handleVerificationCodeBack}
            ref={
              InputRefsMap[InputsConfigMap[index] as keyof typeof InputRefsMap]
            }
            handlePaste={handlePaste}
            isErrors={isErrors}
            isActive={
              !!formik.values[
                InputsConfigMap[index] as keyof typeof formik.values
              ] || InputsConfigMap[counter] === InputsConfigMap[index]
            }
          />
        ))}
      </div>
      {isErrors && (
        <div className={styles.incorrect_code}>
          <FormattedMessage
            id={
              isVerifiedCode
                ? "feature_incorrectCode"
                : "feature_notVerifiedCode"
            }
          />
        </div>
      )}
      <EmailFormTimer isExpiredMap={{ isCodeExpired, SetIsCodeExpired }} />
      <div className={styles.button_group}>
        <Button
          variant="primarySmall"
          type="submit"
          className={styles.button_group__submit}
          disabled={handleDisabledButton() && !isCodeExpired}
        >
          <FormattedMessage id={isCodeExpired ? "resend" : "confirm"} />
        </Button>
        <Button
          variant="secondarySmall"
          className={styles.button_group__cancel}
          onClick={handleCancel}
        >
          <FormattedMessage id="cancel" />
        </Button>
      </div>
    </form>
  );
};
