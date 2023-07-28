import React, { useState } from "react";

import { Form, Formik } from "formik";

import { useIntl } from "react-intl";

import { useNavigate } from "react-router-dom";

import { sendRegistrationType } from "../../../../services/api/sendRegistrationType";

import { getCookie, setCookie } from "../../../../utils/cookieHandlers";

import { Button } from "../../../../uikit_v2/Button";

import { Spinner } from "../../../../uikit_v2/Spinner";

import { ContentRadioBtn } from "./ContentRadioBtn";

import { RadioButton } from "../../../../uikit_v2/RadioButton";

import onlineIcon from "../../../../uikit_v2/static/online-sing-up.svg";

import offlineIcon from "../../../../uikit_v2/static/offline-sing-up.svg";

import { getSignUpNavigateLink } from "../StepConfig/getSignUpNavigateLink";

import { ONLINE, OFFLINE } from "../../../../utils/variables";

import styles from "./SingUpStepFour.module.css";

type InitialValuesType = {
  registrationType: "online" | "offline";
};

const initialValues: InitialValuesType = {
  registrationType: ONLINE,
};

export const SingUpStepFour = () => {
  const navigate = useNavigate();
  const intl = useIntl();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = ({ registrationType }: InitialValuesType) => {
    const uuid = getCookie("uuid");
    const requestBody = {
      uuid: uuid as string,
      type: registrationType as typeof ONLINE | typeof OFFLINE,
    };
    setIsLoading(true);
    sendRegistrationType(requestBody)
      .then((data) => {
        setCookie("uuid", data.uuid);
        navigate(getSignUpNavigateLink(data.Step.next));
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{intl.formatMessage({ id: "signUp" })}</h1>
      <h2 className={styles.sub_title}>
        {intl.formatMessage({ id: "signUpOptionTitle" })}
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
                    id: "signUpOptionOnlineTitle",
                  })}
                  description={intl.formatMessage({
                    id: "signUpOptionOnlineDescription",
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
                    id: "signUpOptionOfflineTitle",
                  })}
                  description={intl.formatMessage({
                    id: "signUpOptionOfflineDescription",
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
      {isLoading && (
        <div className={styles.backdrop}>
          <Spinner />
        </div>
      )}
    </div>
  );
};
