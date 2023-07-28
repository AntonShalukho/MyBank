import React from "react";

import { useIntl } from "react-intl";

import { Popup } from "../Popup";

import { CongratulationsIcon } from "../../shared/assets/icons";

import styles from "./SuccessPopup.module.scss";

export const SuccessPopup = () => {
  const intl = useIntl();
  return (
    <Popup>
      <div className={styles.wrapper}>
        <CongratulationsIcon />
        <p className={styles.title}>
          {intl.formatMessage({ id: "congratulations" })}
        </p>
        <p className={styles.description}>
          {intl.formatMessage({ id: "congratulationsDescription" })}
        </p>
      </div>
    </Popup>
  );
};
