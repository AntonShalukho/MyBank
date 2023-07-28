import { useIntl } from "react-intl";

import { BackArrow } from "src/shared/assets/icons/components/BackArrow";

import { Button } from "../Button";

import { BackButtonProps } from "./types";

import styles from "./BackButton.module.scss";

export const BackButton = ({ onClick }: BackButtonProps) => {
  const intl = useIntl();
  return (
    <Button className={styles.back} variant="default" onClick={onClick}>
      <BackArrow />
      <span className={styles.text}>
        {intl.formatMessage({ id: "backButton" })}
      </span>
    </Button>
  );
};
