import { useIntl } from "react-intl";

import { TitleType } from "../../types";

import styles from "./BlockTitle.module.scss";

export const BlockTitle = ({ title }: TitleType) => {
  const intl = useIntl();
  return <h1 className={styles.title}>{intl.formatMessage({ id: title })}</h1>;
};
