import React from "react";

import { useIntl } from "react-intl";

import styles from "./CopyField.module.css";

export const CopyField = () => {
  const intl = useIntl();
  return (
    <div className={styles.copy_field}>
      {intl.formatMessage({ id: "copyFieldName" })}
    </div>
  );
};
