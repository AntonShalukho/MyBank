import React from "react";

import { useIntl } from "react-intl";

import styles from "./BlockTitle.module.css";

type TitleType = {
  title: string;
};

export const BlockTitle = ({ title }: TitleType) => {
  const intl = useIntl();
  return <h1 className={styles.title}>{intl.formatMessage({ id: title })}</h1>;
};
