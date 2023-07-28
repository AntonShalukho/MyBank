import React from "react";

import classNames from "classnames";

import styles from "./NotificationCard.module.css";

type NotificationCardTypes = {
  icon: string;
  description: string;
  iconClassName?: string;
};

export const NotificationCard = ({
  icon,
  description,
  iconClassName,
}: NotificationCardTypes) => (
  <div className={styles.container}>
    <img
      src={icon}
      alt="icon"
      className={classNames(styles.icon, iconClassName)}
    />
    <div className={styles.description}>{description}</div>
  </div>
);
