import { useIntl } from "react-intl";

import { IntroPageBlockThreeImg } from "src/shared/assets/icons";

import styles from "./BlockThree.module.scss";

export const BlockThree = () => {
  const intl = useIntl();
  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <h3 className={styles.title}>
          {intl.formatMessage({ id: "entities_introPageThirdBlockTitle" })}
        </h3>
        <p className={styles.subtitle}>
          {intl.formatMessage({ id: "entities_introPageThirdBlockSubtitle" })}
        </p>
        <div className={styles.imageWrapper}>
          <IntroPageBlockThreeImg className={styles.image} />
        </div>
      </div>
    </div>
  );
};
