import React from "react";

import { useIntl } from "react-intl";

import { VideoType } from "../AnimationBlock/AnimationTop";

import macBoy from "../../../../uikit_v2/static/macBoy.png";

import styles from "./BlockSeven.module.css";

export const BlockSeven = ({ video }: VideoType) => {
  const intl = useIntl();

  return (
    <div className={styles.wrapper}>
      <div className={styles.block_top}>
        <div className={styles.block_top_left}>
          <div className={styles.top_left_title}>
            {intl.formatMessage({ id: "introPageTitleJoin" })}
          </div>
          <div className={styles.top_left_description}>
            {intl.formatMessage({ id: "introPageDescJoin" })}
          </div>
        </div>
        <div className={styles.block_top_right}>
          <div className={styles.top_right_title}>
            {intl.formatMessage({ id: "introPageTitleOver" })}
          </div>
          <div className={styles.top_right_description}>
            {intl.formatMessage({ id: "introPageDescOver" })}
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.block_left}>
          <div className={styles.textWrapper}>
            <div className={styles.left_title}>
              {intl.formatMessage({ id: "introPageTitleSustainable" })}
            </div>
            <div className={styles.left_description}>
              {intl.formatMessage({ id: "introPageDescSustainable" })}
            </div>
          </div>
          <div className={styles.blockVideo}>
            <video
              className={styles.windTurbinesVideo}
              autoPlay={true}
              loop={true}
              src={video}
              muted={true}
            >
              <track src="" kind="captions" />
            </video>
          </div>
        </div>
        <div className={styles.block_right}>
          <img src={macBoy} className={styles.macBoyImage} alt="" />
          <div className={styles.textWrapper}>
            <div className={styles.right_title}>
              {intl.formatMessage({ id: "introPageTitleBanking" })}
            </div>
            <div className={styles.right_description}>
              {intl.formatMessage({ id: "introPageDescBanking" })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
