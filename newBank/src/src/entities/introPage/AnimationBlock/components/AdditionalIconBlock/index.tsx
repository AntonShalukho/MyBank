import { useIntl } from "react-intl";

import { AdditionalIconBlockType } from "../../types";

import styles from "./AdditionalIconBlock.module.scss";

export const AdditionalIconBlock = ({
  description,
  children,
}: AdditionalIconBlockType) => {
  const intl = useIntl();
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>{children}</div>
      <div className={styles.description}>
        {intl.formatMessage({ id: description })}
      </div>
    </div>
  );
};
