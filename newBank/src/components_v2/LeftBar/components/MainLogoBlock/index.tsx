import { useIntl } from "react-intl";

import classNames from "classnames";

import { getSessionStorage } from "utils/sessionStorageHandler";

import { MainLogoBlockType } from "components_v2/LeftBar/types";

import { MainLogoIcon } from "../MainLogoIcon";

import styles from "./MainLogoBlock.module.css";

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
            {intl.formatMessage({ id: "beeBank" })}
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
