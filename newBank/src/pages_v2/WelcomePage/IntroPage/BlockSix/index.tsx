import React from "react";

import { useIntl } from "react-intl";

import blockSixCalendar from "../../../../uikit_v2/static/blockSixCalendar.png";

import styles from "./BlockSix.module.css";

export const BlockSix = () => {
  const intl = useIntl();
  return (
    <div className={styles.wrapper}>
      <div className={styles.block_left}>
        <div className={styles.bubbleBlock} />
        <img
          className={styles.calendar}
          src={blockSixCalendar}
          alt="calendar"
        />
      </div>
      <div className={styles.block_right}>
        <div className={styles.block_right_title}>
          {intl.formatMessage({ id: "blockSixTitle" })}
        </div>
        <div className={styles.block_right_description}>
          {intl.formatMessage({ id: "blockSixSubtitle" })}
        </div>
      </div>
    </div>
  );
};
