import React from "react";

import { Link } from "react-router-dom";

import { useIntl } from "react-intl";

import styles from "./DescriptionWithLink.module.css";

export const DescriptionWithLink = () => {
  const intl = useIntl();
  return (
    <p className={styles.description}>
      {intl.formatMessage({ id: "officeOptionDescriptionStart" })}
      <a href="/atms" target="_blank" className={styles.link}>
        {intl.formatMessage({ id: "officeOptionDescriptionLink" })}
      </a>
      {intl.formatMessage({ id: "officeOptionDescriptionEnd" })}
    </p>
  );
};
