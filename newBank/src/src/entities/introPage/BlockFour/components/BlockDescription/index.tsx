import { useIntl } from "react-intl";

import { BlockDescriptionType } from "../../types";

import styles from "./BlockDescription.module.scss";

export const BlockDescription = ({ description }: BlockDescriptionType) => {
  const intl = useIntl();
  return (
    <div className={styles.description}>
      {intl.formatMessage({ id: description })}
    </div>
  );
};
