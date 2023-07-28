import { useIntl } from "react-intl";

import macBoy from "src/shared/assets/icons/static/macBoy.png";

import { VideoType } from "../types";

import styles from "./BlockSeven.module.scss";

export const BlockSeven = ({ video }: VideoType) => {
  const intl = useIntl();

  return (
    <div className={styles.wrapper}>
      <div className={styles.block_top}>
        <div className={styles.block_top_left}>
          <div className={styles.top_left_title}>
            {intl.formatMessage({ id: "entities_introPageTitleJoin" })}
          </div>
          <div className={styles.top_left_description}>
            {intl.formatMessage({ id: "entities_introPageDescJoin" })}
          </div>
        </div>
        <div className={styles.block_top_right}>
          <div className={styles.top_right_title}>
            {intl.formatMessage({ id: "entities_introPageTitleOver" })}
          </div>
          <div className={styles.top_right_description}>
            {intl.formatMessage({ id: "entities_introPageDescOver" })}
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.block_left}>
          <div className={styles.textWrapper}>
            <div className={styles.left_title}>
              {intl.formatMessage({ id: "entities_introPageTitleSustainable" })}
            </div>
            <div className={styles.left_description}>
              {intl.formatMessage({ id: "entities_introPageDescSustainable" })}
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
              {intl.formatMessage({ id: "entities_introPageTitleBanking" })}
            </div>
            <div className={styles.right_description}>
              {intl.formatMessage({ id: "entities_introPageDescBanking" })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
