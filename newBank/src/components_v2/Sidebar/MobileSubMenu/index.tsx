import React, { Dispatch, useEffect, useState } from "react";

import { useIntl } from "react-intl";

import classNames from "classnames";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { LogoutIcon, Wallet } from "../../Icon";

import { sidebarData } from "../sidebarData";

import { SubMenu } from "../SubMenu";

import defaultAvatar from "../../../uikit/static/avatar.png";

import { Button } from "../../../uikit_v2/Button";

import { PRODUCTS_PATH } from "../../../utils/variables";

import { getAccountInfo } from "../../../services/api/clientInformation";

import { getProfilePicture } from "../../../services/api/userAvatar";

import styles from "./MobileSubMenu.module.css";

type MobileSubMenuType = {
  handleLogout(): void;
  isSidebarOpen: boolean;
  activeSubmenu: string;
  setActiveSubmenu: Dispatch<React.SetStateAction<string>>;
  mobileClassName: string;
};

export const MobileSubMenu = ({
  handleLogout,
  isSidebarOpen,
  activeSubmenu,
  setActiveSubmenu,
  mobileClassName,
}: MobileSubMenuType) => {
  const [avatar, setAvatar] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const intl = useIntl();

  const handleClick = () => {
    navigate(PRODUCTS_PATH);
  };

  useEffect(() => {
    getAccountInfo().then((data) => {
      setFirstName(data.firstName);
      setLastName(data.lastName);
    });
    getProfilePicture().then((data) => setAvatar(data));
  }, []);

  return (
    <div className={classNames(styles.wrapper, styles[mobileClassName])}>
      <div className={styles.user}>
        <img
          className={styles.user_avatar}
          src={avatar ? `data:image/jpg;base64,${avatar}` : defaultAvatar}
          alt="avatar"
        />
        <Link className={styles.user_link} to="/">
          {isSidebarOpen && (
            <div className={styles.user_name}>
              {firstName}
              {"\n"}
              {lastName}
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
      <ul className={styles.sidebar_list}>
        <li className={classNames(styles.sidebar_item, {})}>
          <SubMenu
            link={sidebarData[0]}
            isSidebarOpen={isSidebarOpen}
            activeSubmenu={activeSubmenu}
            setActiveSubmenu={setActiveSubmenu}
          />
        </li>
        <div className={styles.product_pic}>
          <Wallet className={styles.icon} />
          <div className={styles.product_text}>
            {intl.formatMessage({ id: "products" })}
          </div>
        </div>
        <li className={classNames(styles.sidebar_item, {})}>
          <SubMenu
            link={sidebarData[1]}
            isSidebarOpen={isSidebarOpen}
            activeSubmenu={activeSubmenu}
            setActiveSubmenu={setActiveSubmenu}
          />
        </li>
      </ul>
      {
        //  eslint-disable-next-line
        <div onClick={handleLogout} className={styles.logout}>
          {intl.formatMessage({ id: "logout" })}
          <LogoutIcon />
        </div>
      }
    </div>
  );
};
