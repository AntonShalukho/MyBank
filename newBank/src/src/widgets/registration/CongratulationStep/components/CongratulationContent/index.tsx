import React from "react";

import { useIntl } from "react-intl";

import { CongratulationsIcon } from "src/shared/assets/icons";

import styles from "../../CongratulationStep.module.scss";

export const CongratulationContent = () => {
  const intl = useIntl();
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        {intl.formatMessage({ id: "congratulations" })}
      </div>
      <CongratulationsIcon />
      <div className={styles.description}>
        {intl.formatMessage({ id: "widget_registrationSuccess" })}
      </div>
    </div>
  );
};
