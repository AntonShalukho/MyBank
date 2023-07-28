import React from "react";

import { useIntl } from "react-intl";

import { CongratulationsIcon } from "../../../../../components_v2/Icon";

import styles from "../CongratulationStep.module.css";

export const CongratulationContent = () => {
  const intl = useIntl();
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        {intl.formatMessage({ id: "congratulations" })}
      </div>
      <CongratulationsIcon />
      <div className={styles.description}>
        {intl.formatMessage({ id: "registrationSuccess" })}
      </div>
    </div>
  );
};
