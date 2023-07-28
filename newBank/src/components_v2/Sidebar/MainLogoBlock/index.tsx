import React from "react";

import { useIntl } from "react-intl";

import classNames from "classnames";

import { getSessionStorage } from "utils/sessionStorageHandler";

import { MainLogoIcon } from "../../Icon";

import styles from "./MainLogoBlock.module.css";

type MainLogoBlockType = {
  isSidebarOpen: boolean;
  className?: string;
};

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
            Bee·Bank
          </span>

          <span
            className={classNames(styles.description, {
              [styles.header_description]: !token,
            })}
          >
            {intl.formatMessage({ id: "logoSubtitle" })}
          </span>
        </div>
      )}
    </div>
  );
};
