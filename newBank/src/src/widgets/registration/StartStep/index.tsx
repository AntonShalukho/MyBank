import React, { useEffect } from "react";

import { useNavigate } from "react-router";

import { useIntl } from "react-intl";

import { getSignUpNavigateLink } from "src/shared/lib/getSignUpNavigateLink";

import { NotificationCard } from "src/entities/NotificationCard";

import { deleteCookie, setCookie } from "src/shared/lib/cookieHandlers";

import { Button } from "src/shared/ui/Button";

import { useSpinner } from "src/shared/lib/hooks/useSpinner";

import { getInitialRegistrationStep } from "./api/getInitialRegistrationStep";

import PinkHairedGirl from "./assets/icons/static/PinkHairedGirl.png";

import Watch from "./assets/icons/static/watch.png";

import styles from "./StartStep.module.scss";

export const StartStep = () => {
  const { toggleSpinner } = useSpinner();
  const navigate = useNavigate();
  const intl = useIntl();

  useEffect(() => {
    deleteCookie("uuid");
  }, []);

  const handleButton = () => {
    toggleSpinner(true);
    getInitialRegistrationStep()
      .then((data) => {
        data.uuid && setCookie("uuid", data.uuid);
        navigate(getSignUpNavigateLink(data.Step.next as string));
      })
      .finally(() => toggleSpinner(false));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{intl.formatMessage({ id: "signUp" })}</h1>
      <h2 className={styles.sub_title}>
        {intl.formatMessage({ id: "widget_greeting" })}
      </h2>
      <div className={styles.card_container}>
        <NotificationCard
          icon={Watch}
          description={intl.formatMessage({
            id: "widget_startDescription",
          })}
          iconClassName={styles.phoneIcon}
        />
        <NotificationCard
          icon={PinkHairedGirl}
          description={intl.formatMessage({
            id: "widget_startMessage",
          })}
          iconClassName={styles.faceIcon}
        />
      </div>
      <Button
        variant="primarySmall"
        className={styles.button}
        onClick={handleButton}
      >
        {intl.formatMessage({ id: "continue" })}
      </Button>
    </div>
  );
};
