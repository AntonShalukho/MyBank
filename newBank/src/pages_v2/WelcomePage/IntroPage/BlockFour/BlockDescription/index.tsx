import React from "react";

import { useIntl } from "react-intl";

import styles from "./BlockDescription.module.css";

type BlockDescriptionType = {
  description: string;
};

export const BlockDescription = ({ description }: BlockDescriptionType) => {
  const intl = useIntl();
  return (
    <div className={styles.description}>
      {intl.formatMessage({ id: description })}
    </div>
  );
};
