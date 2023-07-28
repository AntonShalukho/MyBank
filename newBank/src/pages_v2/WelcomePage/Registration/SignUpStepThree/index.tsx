import React, { useState } from "react";

import { Form, Formik } from "formik";

import { useIntl } from "react-intl";

import { useNavigate } from "react-router";

import { Input } from "../../../../uikit_v2/Input";

import { Button } from "../../../../uikit_v2/Button";

import { RadioButton } from "../../../../uikit_v2/RadioButton";

import { ContentRadioBtn } from "./ContentRadioBtn";

import { sendFinancialInfo } from "../../../../services/api/sendFinancialInfo3rdStep";

import { getSignUpNavigateLink } from "../StepConfig/getSignUpNavigateLink";

import { getCookie, setCookie } from "../../../../utils/cookieHandlers";

import { InitialValuesType } from "./types";

import { validationSchema } from "./validationSchema";

import {
  getDocumentMaxLength,
  getRequestDateFormat,
  handleDateChange,
  handleValidate,
} from "./signUpStepThreeService";

import { Popup } from "../../../../components_v2/Popup";

import { Spinner } from "../../../../uikit_v2/Spinner";

import { initialValues } from "./constants";

import { PASSPORT, POLISH_ID } from "../../../../utils/variables";

import styles from "./SignUpStepThree.module.css";

export const SingUpStepThree = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const intl = useIntl();

  const handleSubmit = (values: InitialValuesType) => {
    const uuid = getCookie("uuid");
    const requestBody = {
      uuid: uuid as string,
      pesel: values.pesel,
      documentType: values.documentType,
      documentID: values.documentID,
      documentExpirationDate: getRequestDateFormat(
        values.documentExpirationDate
      ),
    };

    setIsLoading(true);
    sendFinancialInfo(requestBody)
      .then((date) => {
        setCookie("uuid", date.uuid);
        navigate(getSignUpNavigateLink(date.Step.next));
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{intl.formatMessage({ id: "singUp" })}</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validate={handleValidate}
      >
        {({ isValid, setFieldError, setFieldValue, values, dirty }) => (
          <Form>
            <div className={styles.input_pesel}>
              <Input
                type="text"
                name="pesel"
                variant="long"
                label={intl.formatMessage({ id: "peselLabel" })}
                placeholder={intl.formatMessage({ id: "peselPlaceholder" })}
                maxLength={11}
                handleFocus={() => setFieldError("pesel", "")}
              />
            </div>
            <h3 className={styles.radioBtn_subtitles}>
              {intl.formatMessage({ id: "IDRadioTitle" })}
            </h3>
            <div className={styles.radioBtn_id}>
              <RadioButton
                className={styles.radioBtn_isID}
                name="documentType"
                value={POLISH_ID}
              >
                <ContentRadioBtn title={intl.formatMessage({ id: "isID" })} />
              </RadioButton>
            </div>
            <div className={styles.radioBtn_passport}>
              <RadioButton
                className="isPassport"
                name="documentType"
                value={PASSPORT}
              >
                <ContentRadioBtn
                  title={intl.formatMessage({ id: "isPassport" })}
                />
              </RadioButton>
            </div>
            <div className={styles.input_documentID}>
              <Input
                name="documentID"
                variant="long"
                label={intl.formatMessage({ id: "nationalIdLabel" })}
                placeholder={intl.formatMessage({
                  id: "nationalIdPlaceholder",
                })}
                handleFocus={() => setFieldError("documentID", "")}
                maxLength={getDocumentMaxLength(values.documentType).max}
                minLength={getDocumentMaxLength(values.documentType).min}
              />
            </div>
            <div className={styles.input_documentExpirationDate}>
              <Input
                name="documentExpirationDate"
                variant="long"
                label={intl.formatMessage({ id: "expirationDateLabel" })}
                placeholder={intl.formatMessage({
                  id: "expirationDatePlaceholder",
                })}
                maxLength={10}
                handleFocus={() => setFieldError("documentExpirationDate", "")}
                onChange={(e) => handleDateChange(e, setFieldValue)}
              />
            </div>
            <Button
              type="submit"
              variant="primarySmall"
              disabled={!isValid || !dirty}
              className={styles.button}
            >
              {intl.formatMessage({ id: "Confirm" })}
            </Button>
          </Form>
        )}
      </Formik>
      {isLoading && (
        <Popup className={styles.popup}>
          <Spinner />
        </Popup>
      )}
    </div>
  );
};
