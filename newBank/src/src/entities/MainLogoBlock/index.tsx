import React from "react";

import { useIntl } from "react-intl";

import classNames from "classnames";

import { getSessionStorage } from "utils/sessionStorageHandler";

import { MainLogoIcon } from "../../shared/assets/icons";

import { MainLogoBlockType } from "./types";

import styles from "./MainLogoBlock.module.scss";

export const MainLogoBlock: React.FC<MainLogoBlockType> = ({
  isSidebarOpen,
  className,
}) => {
  const token = getSessionStorage("token");
  const intl = useIntl();

  return (
    <div className={classNames(styles.wrapper, className)}>
      <MainLogoIcon className={styles.icon} />
      {isSidebarOpen && (
        <div className={classNames(styles.wrapper_description, className)}>
          <span
            className={classNames(styles.title, {
              [styles.header_title]: !token,
            })}
          >
            {intl.formatMessage({ id: "entities_beeBack" })}
          </span>

          <span
            className={classNames(styles.description, {
              [styles.header_description]: !token,
            })}
          >
            {intl.formatMessage({ id: "entities_logoSubtitle" })}
          </span>
        </div>
      )}
    </div>
  );
};
