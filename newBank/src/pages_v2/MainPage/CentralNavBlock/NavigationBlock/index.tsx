import React from "react";

import { NavLink, useLocation } from "react-router-dom";

import classNames from "classnames";

import { useIntl } from "react-intl";

import { sidebarData } from "./sidebarData";

import { MAIN_PAGE_ACCOUNT_PATH } from "../../../../utils/variables";

import styles from "./NavigationBlock.module.css";

export const NavigationBlock = () => {
  const { pathname } = useLocation();
  const intl = useIntl();

  const getActiveLink = (path: string): boolean =>
    (sidebarData[0].path === pathname && path === MAIN_PAGE_ACCOUNT_PATH) ||
    pathname === path;

  return (
    <div className={styles.wrapper}>
      <ul className={styles.sidebar_list}>
        {sidebarData[0].subNav?.map((item) => (
          <li key={item.title}>
            <NavLink
              to={item.path}
              className={classNames(styles.link, {
                [styles.link_active]: getActiveLink(item.path),
              })}
            >
              {intl.formatMessage({ id: item.title })}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
