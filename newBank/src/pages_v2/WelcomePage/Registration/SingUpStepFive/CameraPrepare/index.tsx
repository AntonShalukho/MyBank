import React from "react";

import { useIntl } from "react-intl";

import cameraIcon from "../../../../../uikit_v2/static/camera.svg";

import { ContentCard } from "../ContentCard";

import styles from "./CameraPrepare.module.css";

type CameraPrepareType = {
  handleClick(): void;
};

export const CameraPrepare = ({ handleClick }: CameraPrepareType) => {
  const intl = useIntl();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{intl.formatMessage({ id: "signUp" })}</h1>
      <h2 className={styles.sub_title}>
        {intl.formatMessage({ id: "cameraPreparationMessage" })}
      </h2>
      <ContentCard icon={cameraIcon} handleClick={handleClick} />
    </div>
  );
};
