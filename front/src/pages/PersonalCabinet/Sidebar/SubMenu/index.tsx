import React, { Dispatch } from "react";

import { NavLink, useLocation } from "react-router-dom";

import { useIntl } from "react-intl";

import classNames from "classnames";

import { SidebarDataItem } from "../sidebarData";

import { SVGSidebar } from "../SVGSidebar";

import "./SubMenuStyle.css";

type PropsType = {
  item: SidebarDataItem;
  setActiveSubmenu: Dispatch<React.SetStateAction<string>>;
  activeSubmenu: string;
  closeBurgerMenu?: () => void;
};

export const SubMenu = ({
  item,
  activeSubmenu,
  setActiveSubmenu,
  closeBurgerMenu,
}: PropsType) => {
  const intl = useIntl();
  const Icon = SVGSidebar[item.title];
  const { path, title, subNav } = item;
  const location = useLocation();
  const handleClick = () => {
    if (activeSubmenu === title) return;
    setActiveSubmenu(title);
    closeBurgerMenu && closeBurgerMenu();
  };
  return (
    <>
      <NavLink
        to={path}
        className={classNames("sub-menu-nav", {
          active:
            (activeSubmenu === title &&
              location.pathname !== "/cabinet/personal-info") ||
            item.path === location.pathname,
        })}
        onClick={handleClick}
      >
        <Icon className="sub-menu-icon" />
        <div className="sub-menu-title">
          {intl.formatMessage({ id: title })}
        </div>
      </NavLink>
      <div className="sub-menu-sub-nav-wrapper">
        {activeSubmenu === title &&
          subNav?.map((elem, index) => (
            <NavLink
              to={elem.path}
              className={({ isActive }) => {
                if (
                  isActive ||
                  (location.pathname === `/cabinet/${title}` && index === 0)
                ) {
                  return "active sub-menu-sub-nav-item";
                }
                return "sub-menu-sub-nav-item";
              }}
              key={elem.title}
            >
              {intl.formatMessage({ id: elem.title })}
            </NavLink>
          ))}
      </div>
    </>
  );
};
