import classNames from "classnames";

import { getSessionStorage } from "utils/sessionStorageHandler";

import { ContainerProps } from "./types";

import styles from "./Container.module.scss";

export const Container = ({ isFolded, children }: ContainerProps) => {
  const token = getSessionStorage("token");

  return (
    <div
      className={classNames(
        styles.wrapper,
        {
          [styles.wrapper_folded]: isFolded,
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
