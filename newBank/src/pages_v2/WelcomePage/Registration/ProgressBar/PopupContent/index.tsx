import React from "react";

import { useIntl } from "react-intl";

import { useNavigate } from "react-router";

import classNames from "classnames";

import { Button } from "../../../../../uikit_v2/Button";

import leaveIcon from "../../../../../uikit_v2/static/leaveRegistration.png";

import { deleteCookie } from "../../../../../utils/cookieHandlers";

import styles from "./PopupContent.module.css";

type PopupContentType = {
  onClose(): void;
  handleSideEffects?: () => void;
};

export const PopupContent = ({
  onClose,
  handleSideEffects,
}: PopupContentType) => {
  const navigate = useNavigate();
  const intl = useIntl();

  const handleCancel = () => onClose();

  const handleConfirm = () => {
    handleSideEffects ? handleSideEffects() : navigate("/");
    deleteCookie("uuid");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        {intl.formatMessage({ id: "wantFinishRegistration" })}
      </div>
      <img src={leaveIcon} alt="leaveIcon" className={styles.icon_pic} />
      <div className={styles.button_container}>
        <Button
          variant="secondarySmall"
          className={classNames(styles.button, styles.greyButton)}
          onClick={handleCancel}
        >
          {intl.formatMessage({ id: "cancel" })}
        </Button>
        <Button
          variant="primarySmall"
          className={styles.button}
          onClick={handleConfirm}
        >
          {intl.formatMessage({ id: "confirm" })}
        </Button>
      </div>
    </div>
  );
};
