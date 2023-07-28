import { ItemContentType } from "components_v2/LeftBar/types";

import classNames from "classnames";

import { useIntl } from "react-intl";

import { isEmpty } from "ramda";

import { ArrowDownIcon } from "../ArrowDownIcon";

import styles from "./ItemContent.module.css";

export const ItemContent = ({
  itemData,
  isActiveItem,
  isCollapsed,
}: ItemContentType) => {
  const intl = useIntl();

  return (
    <>
      <div className={styles.content}>
        <div
          className={classNames(styles.icon, {
            [styles.icon_collapsed]: !isCollapsed,
          })}
        >
          {itemData.icon}
        </div>
        {isCollapsed && (
          <div className={styles.title}>
            {intl.formatMessage({ id: itemData.title })}
          </div>
        )}
      </div>
      {itemData.subLinks && !isEmpty(itemData.subLinks) && isCollapsed && (
        <ArrowDownIcon
          className={classNames(styles.arrow, {
            [styles.arrow_bottom]: !isActiveItem,
          })}
        />
      )}
    </>
  );
};
