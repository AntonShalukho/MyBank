import React from "react";

import { useNavigate } from "react-router-dom";

import { useIntl } from "react-intl";

import { Button } from "src/shared/ui/Button";

import { UnsuccessIcon } from "src/shared/assets/icons";

import { getSignUpNavigateLink } from "src/shared/lib/getSignUpNavigateLink";

import { OFFLINE_REGISTRATION_STEP } from "src/shared/consts/Registration";

import { ContentWithoutCameraType } from "../../types";

import styles from "./ContentWithoutCamera.module.scss";

export const ContentWithoutCamera = ({ onClose }: ContentWithoutCameraType) => {
  const navigate = useNavigate();
  const intl = useIntl();
  const handleContinueClick = () =>
    navigate(getSignUpNavigateLink(OFFLINE_REGISTRATION_STEP));
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        {intl.formatMessage({ id: "widget_withoutCamera" })}
      </h2>
      <UnsuccessIcon />
      <p className={styles.description}>
        {intl.formatMessage({ id: "widget_withoutCameraOptions" })}
      </p>
      <div className={styles.wrapper_button}>
        <Button
          type="button"
          variant="primarySmall"
          onClick={handleContinueClick}
        >
          {intl.formatMessage({ id: "widget_continueOffline" })}
        </Button>
        <Button type="button" variant="secondarySmall" onClick={onClose}>
          {intl.formatMessage({ id: "cancel" })}
        </Button>
      </div>
    </div>
  );
};
