import classNames from "classnames";

import { InfoCardProps } from "../../types";

import styles from "./InfoCardStyles.module.scss";

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
