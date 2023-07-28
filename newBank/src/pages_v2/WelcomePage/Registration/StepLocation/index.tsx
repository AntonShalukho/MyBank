import React, { useState } from "react";

import { Form, Formik } from "formik";

import { useIntl } from "react-intl";

import { useNavigate } from "react-router";

import { Input } from "../../../../uikit_v2/Input";

import { Button } from "../../../../uikit_v2/Button";

import { getSignUpNavigateLink } from "../StepConfig/getSignUpNavigateLink";

import { Spinner } from "../../../../uikit_v2/Spinner";

import { getCookie, setCookie } from "../../../../utils/cookieHandlers";

import { sendRegistrationCourierStep } from "../../../../services/api/sendRegistrationCourier";

import {
  initialValues,
  InitialValuesType,
  validationSchema,
} from "./validation";

import styles from "./StepLocation.module.css";

export const StepLocation = () => {
  const navigate = useNavigate();
  const intl = useIntl();
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
    setIsLoading(true);
    sendRegistrationCourierStep(requestBody)
      .then((data) => {
        setCookie("uuid", data.uuid);
        setCookie("back", data.Step.back);
        navigate(getSignUpNavigateLink(data.Step.next));
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{intl.formatMessage({ id: "singUp" })}</h2>
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
                label={intl.formatMessage({ id: "countryLabel" })}
                placeholder={intl.formatMessage({
                  id: "countryPlaceholderPoland",
                })}
                value="Poland"
                disabled={true}
              />
            </div>
            <div className={styles.input_city}>
              <Input
                name="city"
                variant="long"
                label={intl.formatMessage({ id: "cityLabel" })}
                placeholder={intl.formatMessage({ id: "cityPlaceholder" })}
                maxLength={100}
                minLength={1}
                handleFocus={() => setFieldError("city", "")}
              />
            </div>
            <div className={styles.input_streetname}>
              <Input
                name="street"
                variant="long"
                label={intl.formatMessage({ id: "streetLabel" })}
                placeholder={intl.formatMessage({ id: "streetPlaceholder" })}
                maxLength={100}
                handleFocus={() => setFieldError("street", "")}
              />
            </div>
            <div className={styles.input_housenumber}>
              <Input
                name="houseNumber"
                variant="long"
                label={intl.formatMessage({ id: "houseLabel" })}
                placeholder={intl.formatMessage({ id: "housePlaceholder" })}
                maxLength={10}
                handleFocus={() => setFieldError("houseNumber", "")}
              />
            </div>
            <div className={styles.input_apartmentnumber}>
              <Input
                name="flat"
                variant="long"
                label={intl.formatMessage({ id: "apartmentLabel" })}
                placeholder={intl.formatMessage({
                  id: "apartmentPlaceholder",
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
      {isLoading && (
        <div className={styles.backdrop}>
          <Spinner />
        </div>
      )}
    </div>
  );
};
