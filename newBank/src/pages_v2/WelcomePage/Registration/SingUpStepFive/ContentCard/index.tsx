import React from "react";

import { useIntl } from "react-intl";

import { Button } from "../../../../../uikit_v2/Button";

import styles from "./ContentCard.module.css";

type ContentCardProps = {
  icon: string;
  description?: string;
  handleClick(): void;
};

export const ContentCard = ({
  icon,
  description,
  handleClick,
}: ContentCardProps) => {
  const intl = useIntl();
  return (
    <div className={styles.container}>
      <img src={icon} className={styles.icon} alt="icon" />
      <p className={styles.description}>{description}</p>
      <Button
        variant="primarySmall"
        onClick={handleClick}
        className={styles.button}
      >
        {intl.formatMessage({ id: "continueButtonText" })}
      </Button>
    </div>
  );
};
