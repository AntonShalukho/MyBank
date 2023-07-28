import classNames from "classnames";

import { Link } from "react-router-dom";

import { MAIN_PATH } from "utils/consts/leftBarConsts";

import { useIntl } from "react-intl";

import { ArrowDoubleRight, LogoutIcon } from "components_v2/Icon";

import { MainLogoBlock } from "../MainLogoBlock";

import { FullScreenBarType } from "../../types";

import { NavItem } from "../NavItem";

import { leftBarMockData } from "../../mock";
import styles from "./FullScreenBar.module.css";

export const FullScreenBar = ({
  toggleContainerFolded,
  isCollapsed,
  user,
  handleLogout,
  navItemStyles,
}: FullScreenBarType) => {
  const intl = useIntl();

  const handleToggleSidebar = () => {
    toggleContainerFolded();
  };

  return (
    <>
      <Link to={MAIN_PATH}>
        <MainLogoBlock isSidebarOpen={isCollapsed} />
      </Link>
      <nav>
        <ul className={styles.sidebar_list}>
          {leftBarMockData.map((item) => (
            <NavItem
              key={item.title}
              itemData={item}
              isCollapsed={isCollapsed}
              styles={navItemStyles}
            />
          ))}
        </ul>
      </nav>
      <div className={styles.footer_block}>
        {
          //  eslint-disable-next-line
          <div
            className={classNames(styles.buttonCollapse, {
              [styles.buttonCollapse_inactive]: !isCollapsed,
            })}
            onClick={handleToggleSidebar}
          >
            <ArrowDoubleRight />
            <span>{intl.formatMessage({ id: "collapse" })}</span>
          </div>
        }
        <div
          className={classNames(styles.line, {
            [styles.line_inactive]: !isCollapsed,
          })}
        />
        <div className={styles.user_wrapper}>
          <div
            className={classNames(styles.user_avatar_container, {
              [styles.user_avatar_container_collapsed]: !isCollapsed,
            })}
          >
            <img
              className={styles.user_avatar}
              src={user.avatar}
              alt="avatar"
            />
          </div>
          <Link to="/settings/profile" className={styles.user_link}>
            {isCollapsed && (
              <div className={styles.user_name}>
                <p>{user.name}</p>
                <p>{user.surname}</p>
              </div>
            )}
          </Link>
          {isCollapsed && (
            //  eslint-disable-next-line
            <div onClick={handleLogout} className={styles.logout}>
              <LogoutIcon />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
