import React, { ReactNode } from "react";

import { useIntl } from "react-intl";

import styles from "./AdditionalIconBlock.module.css";

type AdditionalIconBlockType = {
  description: string;
  children: ReactNode;
};

export const AdditionalIconBlock = ({
  description,
  children,
}: AdditionalIconBlockType) => {
  const intl = useIntl();
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>{children}</div>
      <div className={styles.description}>
        {intl.formatMessage({ id: description })}
      </div>
    </div>
  );
};
