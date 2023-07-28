import React, { useState } from "react";

import { Form, Formik } from "formik";

import { useIntl } from "react-intl";

import { useNavigate } from "react-router-dom";

import { getCookie, setCookie } from "../../../../../utils/cookieHandlers";

import { Button } from "../../../../../uikit_v2/Button";

import { ContentRadioBtn } from "../ContentRadioBtn";

import { Spinner } from "../../../../../uikit_v2/Spinner";

import { RadioButton } from "../../../../../uikit_v2/RadioButton";

import courierCarIcon from "../../../../../uikit_v2/static/courier-car.svg";

import offlineIcon from "../../../../../uikit_v2/static/offline-sing-up.svg";

import { DescriptionWithLink } from "./DescriptionWithLink";

import { getSignUpNavigateLink } from "../../StepConfig/getSignUpNavigateLink";

import {
  OfflineType,
  sendOfflineRegistrationType,
} from "../../../../../services/api/sendOfflineRegistrationType";

import { BANK, COURIER } from "../../../../../utils/variables";

import styles from "./OfflineConfirmationVerification.module.css";

type ValuesType = {
  registrationType: OfflineType;
};

const initialValues: ValuesType = {
  registrationType: COURIER,
};

export const OfflineConfirmationVerification = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const intl = useIntl();
  const navigate = useNavigate();

  const handleSubmit = (values: ValuesType) => {
    const uuid = getCookie("uuid");
    const requestBody = {
      uuid: uuid as string,
      type: values.registrationType as OfflineType,
    };
    setIsLoading(true);
    sendOfflineRegistrationType(requestBody)
      .then((data) => {
        setCookie("uuid", data.uuid);
        navigate(getSignUpNavigateLink(data.Step.next));
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{intl.formatMessage({ id: "signUp" })}</h1>
      <h2 className={styles.sub_title}>
        {intl.formatMessage({ id: "offlineConfirmationTitle" })}
      </h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
                  title={intl.formatMessage({ id: "courierOptionTitle" })}
                  description={intl.formatMessage({
                    id: "courierOptionDescription",
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
                  title={intl.formatMessage({ id: "officeOptionTitle" })}
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
      {isLoading && (
        <div className={styles.backdrop}>
          <Spinner />
        </div>
      )}
    </div>
  );
};
