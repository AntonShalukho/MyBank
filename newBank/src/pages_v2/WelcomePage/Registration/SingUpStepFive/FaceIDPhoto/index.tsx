import React from "react";

import { useIntl } from "react-intl";

import idVerificationIcon from "../../../../../uikit_v2/static/id-verification.svg";

import { ContentCard } from "../ContentCard";

import styles from "./FaceIDPhoto.module.css";

type FaceIDPhotoType = {
  handleClick(): void;
};

export const FaceIDPhoto = ({ handleClick }: FaceIDPhotoType) => {
  const intl = useIntl();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{intl.formatMessage({ id: "signUp" })}</h1>
      <h2 className={styles.sub_title}>
        {intl.formatMessage({ id: "FaceIDPhotoPleaseTakePhoto" })}
      </h2>
      <ContentCard
        icon={idVerificationIcon}
        description={intl.formatMessage({ id: "FaceIDPhotoDescription" })}
        handleClick={handleClick}
      />
    </div>
  );
};
