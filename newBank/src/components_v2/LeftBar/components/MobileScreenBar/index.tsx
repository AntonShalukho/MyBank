import { useState } from "react";

import { useIntl } from "react-intl";

import classNames from "classnames";

import { Link, useNavigate } from "react-router-dom";

import defaultAvatar from "uikit/static/avatar.png";

import { Button } from "uikit_v2/Button";

import { leftBarMockData } from "components_v2/LeftBar/mock";

import { NavItem } from "components_v2/LeftBar/components/NavItem";

import { PRODUCTS_PATH } from "utils/variables";

import { MAIN_PATH } from "utils/consts/leftBarConsts";

import { MobileScreenBarType } from "components_v2/LeftBar/types";

import { LogoutIcon } from "../LogoutIcon";

import { MainLogoBlock } from "../MainLogoBlock";

import styles from "./MobileScreenBar.module.css";

export const MobileScreenBar = ({
  handleLogout,
  isCollapsed,
  user,
  navItemStyles,
}: MobileScreenBarType) => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const navigate = useNavigate();
  const intl = useIntl();

  const handleClick = () => {
    navigate(PRODUCTS_PATH);
  };

  const handleBurgerMenu = () =>
    setIsMobileMenu((isMobileMenu) => !isMobileMenu);

  return (
    <>
      <div
        className={classNames(styles.wrapper, {
          [styles.active_mobile_menu]: isMobileMenu,
        })}
      >
        <div className={styles.user}>
          <img
            className={styles.user_avatar}
            src={user.avatar ? user.avatar : defaultAvatar}
            alt="avatar"
          />
          <Link className={styles.user_link} to="/">
            {isCollapsed && (
              <div className={styles.user_name}>
                {user.name}
                {"\n"}
                {user.surname}
              </div>
            )}
          </Link>
        </div>
        <Button
          variant="primarySmall"
          className={styles.open_link}
          onClick={handleClick}
        >
          {intl.formatMessage({ id: "plusOpenAccount" })}
        </Button>
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
        {
          //  eslint-disable-next-line
          <div onClick={handleLogout} className={styles.logout}>
            {intl.formatMessage({ id: "logout" })}
            <LogoutIcon />
          </div>
        }
      </div>
      <Link to={MAIN_PATH}>
        <MainLogoBlock isSidebarOpen={isCollapsed} />
      </Link>
      {
        //  eslint-disable-next-line
        <div className={styles.burger} onClick={handleBurgerMenu}>
          <div
            className={classNames(styles.burger_icon, {
              [styles.burger_icon_active]: isMobileMenu,
            })}
          />
        </div>
      }
    </>
  );
};
