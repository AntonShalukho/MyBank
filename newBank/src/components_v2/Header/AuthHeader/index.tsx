import { Link, useLocation } from "react-router-dom";

import { useIntl } from "react-intl";

import {
  getContentConfig,
  getDirectionConfig,
  getTitleConfig,
} from "../headerConfigs";

import styles from "../Header.module.css";

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
