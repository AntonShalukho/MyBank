import { useState } from "react";

import classNames from "classnames";

import { NavLink, useLocation } from "react-router-dom";

import { NavItemType } from "components_v2/LeftBar/types";

import {
  getActiveClassName,
  getCollapsedActiveClassName,
} from "components_v2/LeftBar/lib/getActiveItemClassName";

import { ItemContent } from "../ItemContent";

export const NavItem = ({
  itemData,
  isDefault,
  isCollapsed,
  styles,
}: NavItemType) => {
  const [isActiveItem, setIsActiveItem] = useState<boolean>(false);
  const { pathname } = useLocation();

  const getIsDefaultItem = (index: number): boolean =>
    index === 0 && pathname === itemData.path;

  return (
    <li
      className={classNames(
        styles.wrapper,
        {
          [styles.wrapper_extend]: isActiveItem,
        },
        {
          [styles.wrapper_collapsed]: !isCollapsed,
        }
      )}
    >
      <NavLink
        to={itemData.path}
        className={({ isActive }) =>
          isCollapsed
            ? getActiveClassName(
                isActive,
                setIsActiveItem,
                isDefault,
                itemData,
                styles
              )
            : getCollapsedActiveClassName(
                isActive,
                setIsActiveItem,
                isDefault,
                itemData,
                styles
              )
        }
      >
        <ItemContent
          itemData={itemData}
          isActiveItem={isActiveItem}
          isCollapsed={isCollapsed}
        />
      </NavLink>
      {itemData.subLinks && isActiveItem && (
        <ul className={styles.sidebar_list}>
          {itemData.subLinks.map((link, index) => (
            <NavItem
              key={link.title}
              itemData={link}
              isDefault={getIsDefaultItem(index)}
              isCollapsed={isCollapsed}
              styles={styles}
            />
          ))}
        </ul>
      )}
    </li>
  );
};
