import React from "react";

import { useIntl } from "react-intl";

import { ArrowLeftIcon } from "../../components_v2/Icon";

import { Button } from "../../uikit/Button";

import styles from "./BackButton.module.css";

type BackButtonProps = {
  onClick: () => void;
};

export const BackButton = ({ onClick }: BackButtonProps) => {
  const intl = useIntl();
  return (
    <Button className={styles.button} onClick={onClick}>
      <ArrowLeftIcon className={styles.arrow} />
      <span className={styles.title}>
        {intl.formatMessage({ id: "backButton" })}
      </span>
    </Button>
  );
};
