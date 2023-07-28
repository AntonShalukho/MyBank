import React from "react";

import { Link, useLocation } from "react-router-dom";

import { useIntl } from "react-intl";

import {
  getContentConfig,
  getDirectionConfig,
  getTitleConfig,
} from "../../config/headerConfigs";

import styles from "../../Header.module.scss";

export const AuthHeader = () => {
  const { pathname } = useLocation();
  const intl = useIntl();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        {intl.formatMessage({ id: getTitleConfig(pathname) })}
      </h1>
      <Link className={styles.link} to={getDirectionConfig(pathname)}>
        {getContentConfig(pathname)}
      </Link>
    </div>
  );
};
