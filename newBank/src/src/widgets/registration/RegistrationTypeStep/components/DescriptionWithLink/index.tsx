import React from "react";

import { useIntl } from "react-intl";

import styles from "./DescriptionWithLink.module.scss";

export const DescriptionWithLink = () => {
  const intl = useIntl();
  return (
    <p className={styles.description}>
      {intl.formatMessage({ id: "widget_officeStart" })}
      <a href="/atms" target="_blank" className={styles.link}>
        {intl.formatMessage({ id: "widget_officeLink" })}
      </a>
      {intl.formatMessage({ id: "widget_officeEnd" })}
    </p>
  );
};
