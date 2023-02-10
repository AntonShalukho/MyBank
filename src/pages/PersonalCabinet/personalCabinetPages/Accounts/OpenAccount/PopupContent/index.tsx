import React from "react";

import { FormattedMessage } from "react-intl";

import { CheckCongratulations } from "../../../../../../components/Icons";

import styles from "./PopupContent.module.css";

export const PopupContent = () => (
  <>
    <div className={styles.wrapper}>
      <CheckCongratulations />
      <p className={styles.title}>
        <FormattedMessage id="congratulations" />
      </p>
      <p className={styles.description}>
        <FormattedMessage id="congratulationsDescription" />
      </p>
    </div>
  </>
);
