import React, { ReactNode } from "react";

import classNames from "classnames";

import { NotificationCardTypes } from "./types";

import styles from "./NotificationCard.module.scss";

export const NotificationCard = ({
  icon,
  description,
  iconClassName,
}: NotificationCardTypes) => (
  <div className={styles.container}>
    {typeof icon === "string" ? (
      <img
        src={icon}
        alt="icon"
        className={classNames(styles.icon, iconClassName)}
      />
    ) : (
      <span className={classNames(styles.icon, iconClassName)}>{icon}</span>
    )}
    <div className={styles.description}>{description}</div>
  </div>
);
