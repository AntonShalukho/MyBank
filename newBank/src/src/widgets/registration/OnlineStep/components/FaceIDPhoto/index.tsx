import React from "react";

import { useIntl } from "react-intl";

import idVerificationIcon from "src/shared/assets/icons/static/id-verification.svg";

import { ContentCard } from "../ContentCard";

import { FaceIDPhotoType } from "../../types";

import styles from "./FaceIDPhoto.module.scss";

export const FaceIDPhoto = ({ handleClick }: FaceIDPhotoType) => {
  const intl = useIntl();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{intl.formatMessage({ id: "signUp" })}</h1>
      <h2 className={styles.sub_title}>
        {intl.formatMessage({ id: "widget_faceIDPhoto" })}
      </h2>
      <ContentCard
        icon={idVerificationIcon}
        description={intl.formatMessage({ id: "widget_faceIDDescription" })}
        handleClick={handleClick}
      />
    </div>
  );
};
