import React from "react";

import { NumberBlockType } from "../../../types";

import styles from "./NumberBlock.module.css";

export const NumberBlock = ({ title, content }: NumberBlockType) => (
  <div className={styles.wrapper}>
    <a href={`tel:${title}`} className={styles.title}>
      {title}
    </a>
    <div className={styles.context}>{content}</div>
  </div>
);
