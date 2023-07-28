import React from "react";

import { useIntl } from "react-intl";

import cameraIcon from "src/shared/assets/icons/static/camera.svg";

import { ContentCard } from "../ContentCard";

import { CameraPrepareType } from "../../types";

import styles from "./CameraPrepare.module.scss";

export const CameraPrepare = ({ handleClick }: CameraPrepareType) => {
  const intl = useIntl();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{intl.formatMessage({ id: "signUp" })}</h1>
      <h2 className={styles.sub_title}>
        {intl.formatMessage({ id: "widget_cameraMessage" })}
      </h2>
      <ContentCard icon={cameraIcon} handleClick={handleClick} />
    </div>
  );
};
