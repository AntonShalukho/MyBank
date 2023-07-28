import React from "react";

import { useIntl } from "react-intl";

import blockFiveImg from "../../../../uikit_v2/static/blockFiveImg.png";

import { IntroBlock5AccountPic } from "../../../../components_v2/Icon";

import styles from "./BlockFive.module.css";

export const BlockFive = () => {
  const intl = useIntl();
  return (
    <div className={styles.wrapper}>
      <div className={styles.block_left}>
        <div className={styles.block_left_title}>
          {intl.formatMessage({ id: "blockFiveTitle" })}
        </div>
        <div className={styles.block_left_description}>
          {intl.formatMessage({ id: "blockFiveDescription" })}
        </div>
      </div>
      <div className={styles.block_right}>
        <div className={styles.textWrapperRight}>
          <div className={styles.block_right_title}>
            {intl.formatMessage({ id: "blockFiveTitleRight" })}
          </div>
          <div className={styles.block_right_description}>
            {intl.formatMessage({ id: "blockFiveDescriptionRight" })}
          </div>
        </div>
        <div className={styles.block_right_img}>
          <img className={styles.img} src={blockFiveImg} alt="calendar" />
        </div>
      </div>
    </div>
  );
};
