import React from "react";

import Browser from "../../../../../uikit_v2/static/Browser_mobile.png";

import { InfoBlock } from "../InfoBlock";

import styles from "./AnimationBottom.module.css";

export const AnimationBottom = () => (
  <div className={styles.wrapper}>
    <InfoBlock
      title="introPageAnimBottomTitle"
      titleDesc="introPageAnimBottomTitleDesc"
      buttonDesc="getStarted"
      titleFontSize={false}
    />
    <img
      src={Browser}
      alt="Browser"
      className={styles.browser}
      // style={{
      //   top: `${browserTop.current}px`,
      //   right: `${browserRight.current}px`,
      //   width: `${browserWidth.current}px`,
      //   height: `${browserHeight.current}px`,
      //   borderRadius: `${browserBorderRadius.current}%`,
      // }}
    />
    <div className={styles.icon} />
  </div>
);
