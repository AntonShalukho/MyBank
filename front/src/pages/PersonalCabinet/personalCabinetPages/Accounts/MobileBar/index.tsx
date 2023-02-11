import React, { useState } from "react";

import { MobileBarDataBottom, MobileBarDataTop } from "./MobileBarData";

import styles from "./MobileBar.module.css";

import { SubMobileBar } from "./SubMobileBar";

export const MobileBar = () => {
  const [isMoreBtnClick, setIsMoreBtnClick] = useState(false);
  return (
    <div className={styles.container}>
      {isMoreBtnClick &&
        MobileBarDataTop.map((item) => (
          <SubMobileBar item={item} key={item.title} />
        ))}
      {MobileBarDataBottom.map((item) => (
        <SubMobileBar
          item={item}
          key={item.title}
          isMoreBtnClick={isMoreBtnClick}
          setIsMoreBtnClick={setIsMoreBtnClick}
        />
      ))}
    </div>
  );
};
