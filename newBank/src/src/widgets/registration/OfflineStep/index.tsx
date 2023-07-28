import React from "react";

import { Form, Formik } from "formik";

import { useIntl } from "react-intl";

import { useNavigate } from "react-router";

import { Input } from "src/shared/ui/Input";

import { Button } from "src/shared/ui/Button";

import { getSignUpNavigateLink } from "src/shared/lib/getSignUpNavigateLink";

import { getCookie, setCookie } from "src/shared/lib/cookieHandlers";

import { useSpinner } from "src/shared/lib/hooks/useSpinner";

import { sendRegistrationCourierStep } from "./api/sendRegistrationCourier";

import { validationSchema } from "./lib/validation";

import { InitialValuesType } from "./types";

import { initialValues } from "./consts";

import styles from "./OfflineStep.module.scss";

export const OfflineStep = () => {
  const navigate = useNavigate();
  const intl = useIntl();
  const { toggleSpinner } = useSpinner();
  const handleSubmit = (values: InitialValuesType) => {
    const uuid = getCookie("uuid");
    const requestBody = {
      uuid: uuid as string,
      country: values.country,
      city: values.city,
      street: values.street,
      houseNumber: values.houseNumber,
      flat: values.flat,
    };
    toggleSpinner(true);
    sendRegistrationCourierStep(requestBody)
      .then((data) => {
        setCookie("uuid", data.uuid);
        data.Step.back && setCookie("back", data.Step.back);
        data.Step.next && navigate(getSignUpNavigateLink(data.Step.next));
      })
      .finally(() => {
        toggleSpinner(false);
      });
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{intl.formatMessage({ id: "signUp" })}</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isValid, dirty, setFieldError }) => (
          <Form>
            <div className={styles.input_country}>
              <Input
                name="country"
                variant="long"
                label={intl.formatMessage({ id: "country" })}
                placeholder={intl.formatMessage({
                  id: "poland",
                })}
                value="Poland"
              />
            </div>
            <div className={styles.input_city}>
              <Input
                name="city"
                variant="long"
                label={intl.formatMessage({ id: "city" })}
                placeholder={intl.formatMessage({
                  id: "widget_cityPlaceholder",
                })}
                maxLength={100}
                minLength={1}
                handleFocus={() => setFieldError("city", "")}
              />
            </div>
            <div className={styles.input_streetname}>
              <Input
                name="street"
                variant="long"
                label={intl.formatMessage({ id: "widget_streetName" })}
                placeholder={intl.formatMessage({
                  id: "widget_streetPlaceholder",
                })}
                maxLength={100}
                handleFocus={() => setFieldError("street", "")}
              />
            </div>
            <div className={styles.input_housenumber}>
              <Input
                name="houseNumber"
                variant="long"
                label={intl.formatMessage({ id: "widget_houseLabel" })}
                placeholder={intl.formatMessage({
                  id: "widget_housePlaceholder",
                })}
                maxLength={10}
                handleFocus={() => setFieldError("houseNumber", "")}
              />
            </div>
            <div className={styles.input_apartmentnumber}>
              <Input
                name="flat"
                variant="long"
                label={intl.formatMessage({ id: "widget_apartmentLabel" })}
                placeholder={intl.formatMessage({
                  id: "widget_apartmentPlaceholder",
                })}
                maxLength={10}
                handleFocus={() => setFieldError("flat", "")}
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
