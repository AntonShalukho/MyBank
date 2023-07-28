import React, { useEffect, useRef, useState } from "react";

import { useFormik } from "formik";

import { FormattedMessage } from "react-intl";

import { useNavigate } from "react-router";

import { Button } from "../../../../../../uikit/Button/index";

import { getVerifyCode } from "../../../../../../services/api/getVerifyCode";

import { SmsFormTimer } from "../SmsFormTimer";

import { SmsFormInput } from "./SmsFormInput";

import { Spinner } from "../../../../../../uikit_v2/Spinner";

import { sendAccountProduct } from "../../../../../../services/api/sendAccountProduct";

import { Popup } from "../../../../../../components_v2/Popup";

import { PopupContent } from "../../PopupContent";

import { PRODUCTS_ACCOUNT_LIST_PATH } from "../../../../../../utils/variables";

import styles from "./SmsForm.module.css";

type AccountFormValuesType = {
  bankProductName: string;
  accountName: string;
  currency: {
    name: string;
  };
  verifyCode: string;
};

type SmsFormType = {
  closeConfirmation: () => void;
  handleErrorSubmit: () => void;
  accountFormValue: AccountFormValuesType;
};

type InitialValuesType = {
  firstInput: string;
  secondInput: string;
  thirdInput: string;
  fourthInput: string;
  fifthInput: string;
  sixthInput: string;
};

const initialValues: InitialValuesType = {
  firstInput: "",
  secondInput: "",
  thirdInput: "",
  fourthInput: "",
  fifthInput: "",
  sixthInput: "",
};

export const SmsForm = ({
  closeConfirmation,
  handleErrorSubmit,
  accountFormValue,
}: SmsFormType) => {
  const navigate = useNavigate();
  const [counter, setCounter] = useState<number>(0);
  const counterRef = useRef<number>(0);
  const prevValue = useRef<string>("");
  const [isErrors, setIsErrors] = useState<boolean>(false);
  const [isCodeExpired, SetIsCodeExpired] = useState<boolean>(false);
  const [isVerifiedCode, SetIsVerifiedCode] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const valuesDate = [
    "firstInput",
    "secondInput",
    "thirdInput",
    "fourthInput",
    "fifthInput",
    "sixthInput",
  ];

  const getConfirmationCode = (values: InitialValuesType): string =>
    values.firstInput +
    values.secondInput +
    values.thirdInput +
    values.fourthInput +
    values.fifthInput +
    values.sixthInput;

  const InputRefsMap = {
    firstInput: useRef<HTMLInputElement>(null),
    secondInput: useRef<HTMLInputElement>(null),
    thirdInput: useRef<HTMLInputElement>(null),
    fourthInput: useRef<HTMLInputElement>(null),
    fifthInput: useRef<HTMLInputElement>(null),
    sixthInput: useRef<HTMLInputElement>(null),
  };

  const formik = useFormik({
    initialValues,
    validateOnChange: false,
    validate: (values) => {
      if (!isCodeExpired) {
        valuesDate.forEach((value) => {
          if (values[value as keyof typeof values] === "") {
            setIsErrors(true);
          }
        });
      }
    },
    onSubmit: (values) => {
      if (isCodeExpired) {
        getVerifyCode();
        SetIsCodeExpired(false);
        SetIsVerifiedCode(false);
        formik.resetForm();
        InputRefsMap.firstInput.current?.focus();
        counterRef.current = 0;
        setCounter(0);
      } else if (!isErrors) {
        setIsLoading(true);
        const verifyCode = getConfirmationCode(values);
        const requestBody = { ...accountFormValue, verifyCode };
        sendAccountProduct(requestBody)
          .then(() => {
            setIsOpenPopup(true);
            setTimeout(() => {
              setIsOpenPopup(false);
              navigate(PRODUCTS_ACCOUNT_LIST_PATH);
            }, 2000);
          })
          .catch((error) => {
            if (error.response.status === 406) {
              SetIsVerifiedCode(true);
              Object.keys(values).forEach((value) => {
                formik.setFieldValue(value, "");
              });
            } else {
              handleErrorSubmit();
            }
          })
          .finally(() => setIsLoading(false));
      }
    },
  });

  useEffect(() => {
    InputRefsMap.firstInput.current?.focus();
    getVerifyCode();
  }, []);

  const setFormikValue = (index: number, value: string) => {
    formik.setFieldValue(valuesDate[index], value);
  };

  const setFocus = (index: number) => {
    InputRefsMap[
      valuesDate[index] as keyof typeof InputRefsMap
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
        ? InputRefsMap[valuesDate[counter - 1] as keyof typeof InputRefsMap]
        : InputRefsMap[valuesDate[counter] as keyof typeof InputRefsMap];

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
    closeConfirmation();
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
    <form className={styles.sms_form} onSubmit={formik.handleSubmit}>
      <div className={styles.inputs}>
        {valuesDate.map((value, index) => (
          <SmsFormInput
            key={value}
            id={valuesDate[index]}
            name={valuesDate[index]}
            formikValue={
              formik.values[valuesDate[index] as keyof typeof formik.values]
            }
            handleVerificationCode={handleVerificationCode}
            handleVerificationCodeBack={handleVerificationCodeBack}
            ref={InputRefsMap[valuesDate[index] as keyof typeof InputRefsMap]}
            handlePaste={handlePaste}
            isErrors={isErrors}
          />
        ))}
      </div>
      {isErrors && (
        <div className={styles.incorrect_code}>
          <FormattedMessage
            id={isVerifiedCode ? "incorrectCode" : "notVerifiedCode"}
          />
        </div>
      )}
      {isVerifiedCode && (
        <div className={styles.incorrect_code}>
          <FormattedMessage id="notVerifiedCode" />
        </div>
      )}
      <SmsFormTimer isExpiredMap={{ isCodeExpired, SetIsCodeExpired }} />
      <div className={styles.button_group}>
        <Button
          type="submit"
          className={styles.button_group__submit}
          disabled={handleDisabledButton() && !isCodeExpired}
        >
          <FormattedMessage id={isCodeExpired ? "resend" : "confirm"} />
        </Button>
        <Button className={styles.button_group__cancel} onClick={handleCancel}>
          <FormattedMessage id="cancel" />
        </Button>
      </div>
      {isOpenPopup && (
        <Popup className={styles.backdrop}>
          <PopupContent />
        </Popup>
      )}
      {isLoading && (
        <div className={styles.backdrop}>
          <Spinner />
        </div>
      )}
    </form>
  );
};
