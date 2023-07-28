import React from "react";

import { Form, Formik } from "formik";

import { useIntl } from "react-intl";

import { useNavigate } from "react-router-dom";

import { getCookie, setCookie } from "src/shared/lib/cookieHandlers";

import { Button } from "src/shared/ui/Button";

import { RadioButton } from "src/shared/ui/RadioButton";

import onlineIcon from "src/shared/assets/icons/static/online-sing-up.svg";

import offlineIcon from "src/shared/assets/icons/static/offline-sing-up.svg";

import { getSignUpNavigateLink } from "src/shared/lib/getSignUpNavigateLink";

import { ONLINE, OFFLINE } from "src/shared/consts/Registration";

import { useSpinner } from "src/shared/lib/hooks/useSpinner";

import { InitialValuesType } from "./types";

import { ContentRadioBtn } from "./components/ContentRadioBtn";

import { sendRegistrationType } from "./api/sendRegistrationType";

import { initialValues } from "./consts";

import styles from "./RegistrationTypeStep.module.scss";

export const RegistrationTypeStep = () => {
  const navigate = useNavigate();
  const intl = useIntl();
  const { toggleSpinner } = useSpinner();

  const handleSubmit = ({ registrationType }: InitialValuesType) => {
    const uuid = getCookie("uuid");
    const requestBody = {
      uuid: uuid as string,
      type: registrationType as typeof ONLINE | typeof OFFLINE,
    };
    toggleSpinner(true);
    sendRegistrationType(requestBody)
      .then((data) => {
        setCookie("uuid", data.uuid);
        data.Step.next && navigate(getSignUpNavigateLink(data.Step.next));
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => toggleSpinner(false));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{intl.formatMessage({ id: "signUp" })}</h1>
      <h2 className={styles.sub_title}>
        {intl.formatMessage({ id: "widget_signUpOptionTitle" })}
      </h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <div className={styles.radio_btn_container}>
              <RadioButton
                className="isCard"
                name="registrationType"
                value={ONLINE}
              >
                <ContentRadioBtn
                  icon={onlineIcon}
                  title={intl.formatMessage({
                    id: "online",
                  })}
                  description={intl.formatMessage({
                    id: "widget_signUpOnlineDescription",
                  })}
                />
              </RadioButton>
              <RadioButton
                className="isCard"
                name="registrationType"
                value={OFFLINE}
              >
                <ContentRadioBtn
                  icon={offlineIcon}
                  title={intl.formatMessage({
                    id: "offline",
                  })}
                  description={intl.formatMessage({
                    id: "widget_signUpOfflineDescription",
                  })}
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
