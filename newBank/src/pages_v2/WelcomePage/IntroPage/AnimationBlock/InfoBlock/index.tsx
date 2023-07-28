import React from "react";

import { useIntl } from "react-intl";

import { useNavigate } from "react-router";

import classNames from "classnames";

import { SIGN_UP_PATH } from "../../../../../utils/variables";

import { Button } from "../../../../../uikit_v2/Button";

import styles from "./InfoBlock.module.css";

type InfoBlockType = {
  title: string;
  titleDesc: string;
  buttonDesc: string;
  titleFontSize: boolean;
};

export const InfoBlock = ({
  title,
  titleDesc,
  buttonDesc,
  titleFontSize,
}: InfoBlockType) => {
  const intl = useIntl();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(SIGN_UP_PATH);
  };
  return (
    <div className={styles.description}>
      <div
        className={classNames(styles.title, {
          [styles.large_title]: titleFontSize,
        })}
        style={{ fontSize: `${titleFontSize}px` }}
      >
        {intl.formatMessage({ id: title })}
      </div>
      <div className={styles.title_desc}>
        {intl.formatMessage({ id: titleDesc })}
      </div>
      <Button
        variant="primarySmall"
        className={styles.button}
        onClick={handleClick}
      >
        {intl.formatMessage({ id: buttonDesc })}
      </Button>
    </div>
  );
};