import React from "react";

import { FormattedMessage } from "react-intl";

import { Button } from "../../uikit/Button";

import backArrow from "../../uikit/static/backArrowGreen.svg";

import styles from "./BackButtonGreen.module.css";

type BackButtonGreenProps = {
  onClick: () => void;
};

export const BackButtonGreen = ({ onClick }: BackButtonGreenProps) => (
  <Button className={styles.backButton} onClick={onClick}>
    <img src={backArrow} alt="back" className={styles.backButton_img} />
    <span className={styles.backButton_text}>
      <FormattedMessage id="backButton" />
    </span>
  </Button>
);
