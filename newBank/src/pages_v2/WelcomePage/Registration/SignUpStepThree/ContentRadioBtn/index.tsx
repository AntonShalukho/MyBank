import React from "react";

import styles from "./ContentRadioBtn.module.css";

type ContextRadioBtnType = {
  title: string;
};

export const ContentRadioBtn = ({ title }: ContextRadioBtnType) => (
  <div className={styles.container}>
    <h2 className={styles.title}>{title}</h2>
  </div>
);
