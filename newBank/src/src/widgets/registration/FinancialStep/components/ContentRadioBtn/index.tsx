import React from "react";

import { ContextRadioBtnType } from "../../types";

import styles from "./ContentRadioBtn.module.scss";

export const ContentRadioBtn = ({ title }: ContextRadioBtnType) => (
  <div className={styles.container}>
    <h2 className={styles.title}>{title}</h2>
  </div>
);
