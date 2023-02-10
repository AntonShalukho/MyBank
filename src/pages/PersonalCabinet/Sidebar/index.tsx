import React, { useState } from "react";

import classNames from "classnames";

import { sidebarData } from "./sidebarData";

import { SubMenu } from "./SubMenu";

import "./SidebarStyles.css";

export type SidebarProps = {
  isBurgerMenuOpen?: boolean;
  closeBurgerMenu?: () => void;
};

export const Sidebar: React.FC<SidebarProps> = ({
  isBurgerMenuOpen,
  closeBurgerMenu,
}) => {
  const [activeSubmenu, setActiveSubmenu] = useState("");

  return (
    <div
      className={classNames(
        "sidebar-wrapper",
        isBurgerMenuOpen && "sidebar-wrapper_active"
      )}
    >
      <ul className="sidebar-list">
        {sidebarData.map((item) => (
          <li className="sidebar-item" key={item.title}>
            <SubMenu
              item={item}
              activeSubmenu={activeSubmenu}
              setActiveSubmenu={setActiveSubmenu}
              closeBurgerMenu={closeBurgerMenu}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
