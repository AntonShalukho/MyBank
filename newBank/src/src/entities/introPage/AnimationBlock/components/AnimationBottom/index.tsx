import Browser from "src/shared/assets/icons/static/Browser_mobile.png";

import { InfoBlock } from "../InfoBlock";

import styles from "./AnimationBottom.module.scss";

export const AnimationBottom = () => (
  <div className={styles.wrapper}>
    <InfoBlock
      title="entities_introPageAnimBottomTitle"
      titleDesc="entities_introPageAnimBottomTitleDesc"
      buttonDesc="entities_getStarted"
      titleFontSize={false}
    />
    <img src={Browser} alt="Browser" className={styles.browser} />
    <div className={styles.icon} />
  </div>
);
