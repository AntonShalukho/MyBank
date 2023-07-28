import React, { Dispatch } from "react";

import classNames from "classnames";

import { NavLink } from "react-router-dom";

import { useIntl } from "react-intl";

import { SidebarDataItem } from "../sidebarData";

import { SVGSidebar } from "../SVGSidebar";

import { ACCOUNTS } from "../../../utils/variables";

import styles from "./SubMenu.module.css";

type SubMenuType = {
  isSidebarOpen: boolean;
  link: SidebarDataItem;
  setActiveSubmenu: Dispatch<React.SetStateAction<string>>;
  activeSubmenu: string;
};

export const SubMenu: React.FC<SubMenuType> = ({
  isSidebarOpen,
  link,
  setActiveSubmenu,
  activeSubmenu,
}) => {
  const Icon = SVGSidebar[link.title];
  const { path, title, mainTitle } = link;
  const intl = useIntl();

  const handleClick = () => {
    if (activeSubmenu === title) return;
    setActiveSubmenu(title);
  };

  const getActiveClassName = (isActive: boolean): string => {
    if (isActive && title !== ACCOUNTS)
      return `${styles.link} ${styles.link_active}`;
    if (isActive && title === ACCOUNTS)
      return `${styles.link} ${styles.link_active} ${styles.item}`;
    if (!isActive && title === ACCOUNTS) return `${styles.link} ${styles.item}`;
    return styles.link;
  };

  const handleProductLink = (): boolean => {
    const { width } = window.screen;
    return (
      (!isSidebarOpen && title === activeSubmenu) ||
      (title === ACCOUNTS && width <= 768)
    );
  };

  return (
    <div
      className={classNames(styles.subMenu_wrapper, {
        [styles.subMenu_wrapper_mobile]: handleProductLink(),
      })}
    >
      <NavLink
        to={path}
        className={({ isActive }) => getActiveClassName(isActive)}
        onClick={handleClick}
      >
        {Icon && <Icon className={styles.icon} />}
        {(isSidebarOpen || window.screen.width <= 375) && (
          <div className={styles.title}>
            {intl.formatMessage({ id: mainTitle })}
          </div>
        )}
      </NavLink>
    </div>
  );
};
