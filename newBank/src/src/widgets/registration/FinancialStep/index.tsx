import React from "react";

import { Form, Formik } from "formik";

import { useIntl } from "react-intl";

import { useNavigate } from "react-router";

import { Input } from "src/shared/ui/Input";

import { Button } from "src/shared/ui/Button";

import { getSignUpNavigateLink } from "src/shared/lib/getSignUpNavigateLink";

import { getCookie, setCookie } from "src/shared/lib/cookieHandlers";

import { PASSPORT, POLISH_ID } from "src/shared/consts/Registration";

import { RadioButton } from "src/shared/ui/RadioButton";

import { useSpinner } from "src/shared/lib/hooks/useSpinner";

import { ContentRadioBtn } from "./components/ContentRadioBtn";

import { sendFinancialInfo } from "./api/sendFinancialInfo";

import { InitialValuesType } from "./types";

import { validationSchema } from "./lib/validationSchema";

import {
  getDocumentMaxLength,
  getRequestDateFormat,
  handleDateChange,
  handleValidate,
} from "./lib";

import { initialValues } from "./consts";

import styles from "./FinancialStep.module.scss";

export const FinancialStep = () => {
  const { toggleSpinner } = useSpinner();
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

    toggleSpinner(true);
    sendFinancialInfo(requestBody)
      .then((date) => {
        setCookie("uuid", date.uuid);
        date.Step.next && navigate(getSignUpNavigateLink(date.Step.next));
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => toggleSpinner(false));
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{intl.formatMessage({ id: "signUp" })}</h2>
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
                label={intl.formatMessage({ id: "pesel" })}
                placeholder={intl.formatMessage({
                  id: "widget_peselPlaceholder",
                })}
                maxLength={11}
                handleFocus={() => setFieldError("pesel", "")}
              />
            </div>
            <h3 className={styles.radioBtn_subtitles}>
              {intl.formatMessage({ id: "widget_IDRadioTitle" })}
            </h3>
            <div className={styles.radioBtn_id}>
              <RadioButton
                className={styles.radioBtn_isID}
                name="documentType"
                value={POLISH_ID}
              >
                <ContentRadioBtn
                  title={intl.formatMessage({ id: "widget_isID" })}
                />
              </RadioButton>
            </div>
            <div className={styles.radioBtn_passport}>
              <RadioButton
                className="isPassport"
                name="documentType"
                value={PASSPORT}
              >
                <ContentRadioBtn
                  title={intl.formatMessage({ id: "passport" })}
                />
              </RadioButton>
            </div>
            <div className={styles.input_documentID}>
              <Input
                name="documentID"
                variant="long"
                label={intl.formatMessage({ id: "widget_nationalId" })}
                placeholder={intl.formatMessage({
                  id: "widget_nationalIdPlaceholder",
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
                label={intl.formatMessage({ id: "widget_expirationDate" })}
                placeholder={intl.formatMessage({
                  id: "datePlaceholder",
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
              {intl.formatMessage({ id: "confirm" })}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
