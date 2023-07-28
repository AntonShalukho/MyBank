import { isEmpty } from "ramda";

import { GetActiveClassNameType } from "../types";

export const getActiveClassName: GetActiveClassNameType = (
  isActive,
  setIsActiveItem,
  isDefault,
  itemData,
  styles
) => {
  const linkStyle = styles.link;
  const itemStyle = styles.link_item;
  const activeLinkStyle = `${styles.link} ${styles.link_active}`;
  const activeItemStyle = `${styles.link_item} ${styles.link_active}`;

  if (isDefault) {
    setIsActiveItem(false);
    return activeItemStyle;
  }
  if (isActive && itemData.subLinks && !isEmpty(itemData.subLinks)) {
    setIsActiveItem(true);
    return linkStyle;
  }
  if (!isActive) {
    setIsActiveItem(false);
    if (isDefault === undefined) return linkStyle;
    if (isDefault !== undefined) return itemStyle;
  }
  if (isActive) {
    setIsActiveItem(true);
    if (isDefault === undefined) return activeLinkStyle;
    if (isDefault !== undefined) return activeItemStyle;
  }
  return linkStyle;
};

export const getCollapsedActiveClassName: GetActiveClassNameType = (
  isActive,
  setIsActiveItem,
  isDefault,
  itemData,
  styles
): string => {
  const linkStyle = styles.collapsed_link;
  const activeLinkStyle = `${styles.collapsed_link} ${styles.link_active}`;

  if (isDefault) {
    setIsActiveItem(false);
    return activeLinkStyle;
  }
  if (isActive && itemData.subLinks && !isEmpty(itemData.subLinks)) {
    setIsActiveItem(true);
    return linkStyle;
  }
  if (!isActive) {
    setIsActiveItem(false);
    return linkStyle;
  }
  if (isActive) {
    setIsActiveItem(true);
    return activeLinkStyle;
  }
  return linkStyle;
};
