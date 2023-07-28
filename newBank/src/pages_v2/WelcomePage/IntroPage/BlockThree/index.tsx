import React from "react";

import { useIntl } from "react-intl";

import { IntroPageBlockThreeImg } from "../../../../components_v2/Icon";

import styles from "./BlockThree.module.css";

export const BlockThree = () => {
  const intl = useIntl();
  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <h3 className={styles.title}>
          {intl.formatMessage({ id: "introPageThirdBlockTitle" })}
        </h3>
        <p className={styles.subtitle}>
          {intl.formatMessage({ id: "introPageThirdBlockSubtitle" })}
        </p>
        <div className={styles.imageWrapper}>
          <IntroPageBlockThreeImg className={styles.image} />
        </div>
      </div>
    </div>
  );
};
