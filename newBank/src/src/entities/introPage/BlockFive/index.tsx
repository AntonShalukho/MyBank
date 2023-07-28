import { useIntl } from "react-intl";

import blockFiveImg from "src/shared/assets/icons/static/blockFiveImg.png";

import styles from "./BlockFive.module.scss";

export const BlockFive = () => {
  const intl = useIntl();
  return (
    <div className={styles.wrapper}>
      <div className={styles.block_left}>
        <div className={styles.block_left_title}>
          {intl.formatMessage({ id: "entities_blockFiveTitle" })}
        </div>
        <div className={styles.block_left_description}>
          {intl.formatMessage({ id: "entities_blockFiveDescription" })}
        </div>
      </div>
      <div className={styles.block_right}>
        <div className={styles.textWrapperRight}>
          <div className={styles.block_right_title}>
            {intl.formatMessage({ id: "entities_blockFiveTitleRight" })}
          </div>
          <div className={styles.block_right_description}>
            {intl.formatMessage({ id: "entities_blockFiveDescriptionRight" })}
          </div>
        </div>
        <div className={styles.block_right_img}>
          <img className={styles.img} src={blockFiveImg} alt="calendar" />
        </div>
      </div>
    </div>
  );
};
