import React, { ReactNode } from "react";

import styles from "./InfoBlockStyles.module.css";

type InfoBlockProps = {
  icon?: JSX.Element;
  phoneNumber: string;
  description: ReactNode;
};

export const InfoBlock = ({
  icon,
  phoneNumber,
  description,
}: InfoBlockProps) => (
  <div className={styles.wrapper}>
    {icon && <div className={styles.icon}>{icon}</div>}
    <div className={styles.data_wrapper}>
      <a href={undefined} className={styles.number}>
        {phoneNumber}
      </a>
      <p className={styles.description}>{description}</p>
    </div>
  </div>
);
