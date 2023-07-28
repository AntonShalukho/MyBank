import React from "react";

import { FormattedMessage } from "react-intl";

import { CongratulationsIcon } from "../../../../../components_v2/Icon";

import styles from "./PopupContent.module.css";

export const PopupContent = () => (
  <>
    <div className={styles.wrapper}>
      <CongratulationsIcon />
      <p className={styles.title}>
        <FormattedMessage id="congratulations" />
      </p>
      <p className={styles.description}>
        <FormattedMessage id="congratulationsDescription" />
      </p>
    </div>
  </>
);
