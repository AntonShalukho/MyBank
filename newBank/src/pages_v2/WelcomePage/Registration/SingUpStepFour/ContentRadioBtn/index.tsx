import React from "react";

import styles from "./ContentRadioBtn.module.css";

type ContextRadioBtnType = {
  icon: string;
  title: string;
  description: string | JSX.Element;
};

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
