import { useIntl } from "react-intl";

import { NavLink, Outlet } from "react-router-dom";

import { DELETE_ACCOUNT_PATH } from "utils/consts/settingsConsts";

import classNames from "classnames";

import styles from "./UserProfileContainer.module.css";

import { settingsMockData } from "./mock";

export const UserProfileContainer = () => {
  const intl = useIntl();

  return (
    <section>
      <div className={styles.user_profile_container}>
        <nav className={styles.navigation}>
          <ul>
            {settingsMockData.map((item) => (
              <NavLink
                key={item.title}
                to={item.path}
                className={({ isActive }) =>
                  classNames(
                    styles.link,
                    isActive && styles.active,
                    item.path === DELETE_ACCOUNT_PATH && styles.link_delete,
                    isActive &&
                      item.path === DELETE_ACCOUNT_PATH &&
                      styles.link_delete_active
                  )
                }
              >
                {intl.formatMessage({ id: item.title })}
              </NavLink>
            ))}
          </ul>
        </nav>
        <div className={styles.container}>
          <Outlet />
        </div>
      </div>
    </section>
  );
};
