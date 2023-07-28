import React from "react";

import { Form, Formik } from "formik";

import { useIntl } from "react-intl";

import { useNavigate } from "react-router-dom";

import { getCookie, setCookie } from "src/shared/lib/cookieHandlers";

import { Button } from "src/shared/ui/Button";

import { RadioButton } from "src/shared/ui/RadioButton";

import courierCarIcon from "src/shared/assets/icons/static/courier-car.svg";

import offlineIcon from "src/shared/assets/icons/static/offline-sing-up.svg";

import { getSignUpNavigateLink } from "src/shared/lib/getSignUpNavigateLink";

import { BANK, COURIER } from "src/shared/consts/Registration";

import { useSpinner } from "src/shared/lib/hooks/useSpinner";

import { DescriptionWithLink } from "../DescriptionWithLink";

import { OfflineInitialValuesType } from "../../types";

import { offlineInitialValues } from "../../consts";

import { ContentRadioBtn } from "../ContentRadioBtn";

import { sendOfflineRegistrationType } from "../../api/sendOfflineRegistrationType";

import styles from "./OfflineConfirmationVerification.module.scss";

export const OfflineConfirmationVerification = () => {
  const { toggleSpinner } = useSpinner();
  const intl = useIntl();
  const navigate = useNavigate();

  const handleSubmit = (values: OfflineInitialValuesType) => {
    const uuid = getCookie("uuid");
    const requestBody = {
      uuid: uuid as string,
      type: values.registrationType,
    };
    toggleSpinner(true);
    sendOfflineRegistrationType(requestBody)
      .then((data) => {
        setCookie("uuid", data.uuid);
        data.Step.next && navigate(getSignUpNavigateLink(data.Step.next));
      })
      .finally(() => {
        toggleSpinner(false);
      });
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{intl.formatMessage({ id: "signUp" })}</h1>
      <h2 className={styles.sub_title}>
        {intl.formatMessage({ id: "widget_offlineTitle" })}
      </h2>
      <Formik initialValues={offlineInitialValues} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <div className={styles.radio_btn_container}>
              <RadioButton
                className="isCard"
                name="registrationType"
                value={COURIER}
              >
                <ContentRadioBtn
                  icon={courierCarIcon}
                  title={intl.formatMessage({ id: "widget_courierTitle" })}
                  description={intl.formatMessage({
                    id: "widget_courierDescription",
                  })}
                />
              </RadioButton>
              <RadioButton
                className="isCard"
                name="registrationType"
                value={BANK}
              >
                <ContentRadioBtn
                  icon={offlineIcon}
                  title={intl.formatMessage({ id: "widget_officeOptionTitle" })}
                  description={<DescriptionWithLink />}
                />
              </RadioButton>
            </div>
            <Button
              type="submit"
              variant="primarySmall"
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
