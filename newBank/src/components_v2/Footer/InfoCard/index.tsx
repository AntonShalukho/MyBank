import classNames from "classnames";

import React, { ReactNode } from "react";

import styles from "./InfoCardStyles.module.css";

type InfoCardProps = {
  title: ReactNode;
  workScheduleFirst: ReactNode;
  workScheduleSecond?: ReactNode;
  className?: string;
};

export const InfoCard = ({
  title,
  workScheduleFirst,
  workScheduleSecond,
  className,
}: InfoCardProps) => (
  <>
    <h3 className={styles.title}>{title}</h3>
    <p className={classNames(styles.schedule, styles[`${className}`])}>
      {workScheduleFirst}
    </p>
    {workScheduleSecond && (
      <p className={classNames(styles.schedule, styles[`${className}`])}>
        {workScheduleSecond}
      </p>
    )}
  </>
);
