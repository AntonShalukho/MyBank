import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router";

import { useIntl } from "react-intl";

import { getInitialRegistrationStep } from "../../../../services/api/getInitialRegistrationStep";

import watchIcon from "../../../../uikit_v2/static/watch.svg";

import pinkHairedGirlIcon from "../../../../uikit_v2/static/pink_haired_girl.svg";

import { NotificationCard } from "../../../../components_v2/NotificationCard";

import { Button } from "../../../../uikit_v2/Button";

import { getSignUpNavigateLink } from "../StepConfig/getSignUpNavigateLink";

import { deleteCookie, setCookie } from "../../../../utils/cookieHandlers";

import { Popup } from "../../../../components_v2/Popup";

import { Spinner } from "../../../../uikit_v2/Spinner";

import styles from "./SingUpStepOne.module.css";

export const SingUpStepOne = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const intl = useIntl();

  useEffect(() => {
    deleteCookie("uuid");
  }, []);

  const handleButton = () => {
    setIsLoading(true);
    getInitialRegistrationStep()
      .then((data) => {
        data.uuid && setCookie("uuid", data.uuid);
        navigate(getSignUpNavigateLink(data.Step.next as string));
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{intl.formatMessage({ id: "signUp" })}</h1>
      <h2 className={styles.sub_title}>
        {intl.formatMessage({ id: "registrationGreeting" })}
      </h2>
      <div className={styles.card_container}>
        <NotificationCard
          icon={watchIcon}
          description={intl.formatMessage({
            id: "registrationProcessDescription",
          })}
          iconClassName={styles.phoneIcon}
        />
        <NotificationCard
          icon={pinkHairedGirlIcon}
          description={intl.formatMessage({
            id: "registrationPrepareIdMessage",
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
      {isLoading && (
        <Popup className={styles.popup}>
          <Spinner />
        </Popup>
      )}
    </div>
  );
};
