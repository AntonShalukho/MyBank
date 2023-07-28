import React from "react";

import classNames from "classnames";

import { getSessionStorage } from "utils/sessionStorageHandler";

import styles from "./Container.module.css";

type ContainerProps = {
  isCollapsed: boolean;
  children: React.ReactNode;
};

export const Container = ({ isCollapsed, children }: ContainerProps) => {
  const token = getSessionStorage("token");

  return (
    <div
      className={classNames(
        styles.wrapper,
        {
          [styles.wrapper_folded]: isCollapsed,
        },
        {
          [styles.wrapper_auth]: token,
          [styles.wrapper_not_auth]: !token,
        }
      )}
    >
      {children}
    </div>
  );
};
