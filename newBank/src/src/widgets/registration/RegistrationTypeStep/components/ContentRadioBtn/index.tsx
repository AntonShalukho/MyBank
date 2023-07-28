import React from "react";

import { ContextRadioBtnType } from "../../types";

import styles from "./ContentRadioBtn.module.scss";

export const ContentRadioBtn = ({
  icon,
  title,
  description,
}: ContextRadioBtnType) => (
  <div className={styles.container}>
    <img className={styles.icon} src={icon} alt="icon" />
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.description}>{description}</p>
  </div>
);
