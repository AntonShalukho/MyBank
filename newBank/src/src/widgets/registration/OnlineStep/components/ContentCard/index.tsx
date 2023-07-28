import React from "react";

import { useIntl } from "react-intl";

import { Button } from "src/shared/ui/Button";

import { ContentCardProps } from "../../types";

import styles from "./ContentCard.module.scss";

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
        {intl.formatMessage({ id: "continue" })}
      </Button>
    </div>
  );
};
