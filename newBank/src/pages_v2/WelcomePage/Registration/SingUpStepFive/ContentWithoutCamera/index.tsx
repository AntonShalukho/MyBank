import React from "react";

import { useNavigate } from "react-router-dom";

import { useIntl } from "react-intl";

import { Button } from "../../../../../uikit_v2/Button";

import { UnsuccessIcon } from "../../../../../components_v2/Icon";

import styles from "./ContentWithoutCamera.module.css";

type ContentWithoutCameraType = {
  onClose(): void;
};

export const ContentWithoutCamera = ({ onClose }: ContentWithoutCameraType) => {
  const navigate = useNavigate();
  const intl = useIntl();
  const handleContinueClick = () => navigate("/sing-up/4/offline");
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        {intl.formatMessage({ id: "withoutCameraMessage" })}
      </h2>
      <UnsuccessIcon />
      <p className={styles.description}>
        {intl.formatMessage({ id: "withoutCameraInstructions" })}
      </p>
      <div className={styles.wrapper_button}>
        <Button
          type="button"
          variant="primarySmall"
          onClick={handleContinueClick}
        >
          {intl.formatMessage({ id: "continueOffline" })}
        </Button>
        <Button type="button" variant="secondarySmall" onClick={onClose}>
          {intl.formatMessage({ id: "cancel" })}
        </Button>
      </div>
    </div>
  );
};
