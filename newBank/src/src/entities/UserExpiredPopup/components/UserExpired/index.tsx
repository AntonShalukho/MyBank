import React from "react";

import { Button } from "src/shared/ui/Button";

import { useIntl } from "react-intl";

import { useNavigate } from "react-router";

import { LOG_IN_PATH } from "src/shared/consts";

import classNames from "classnames";

import { deleteSessionStorage } from "src/shared/lib/sessionStorageHandler";

import { sendInvalidate } from "src/shared/api/services/sendInvalidate";

import { UserExpiredType } from "../../types";

import styles from "./UserExpired.module.scss";

export const UserExpired = ({
  mockData,
  children,
  onClose,
  isExpired,
  stayOnSite,
}: UserExpiredType) => {
  const intl = useIntl();
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate(LOG_IN_PATH);
    onClose();
  };

  const logoutHandler = () => {
    sendInvalidate().finally(() => {
      deleteSessionStorage("token");
      onClose();
      navigate("/");
    });
  };

  const handleClose = () => {
    stayOnSite();
    onClose();
  };

  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.expired_wrapper]: !isExpired,
      })}
    >
      <div className={styles.title}>
        {intl.formatMessage({ id: mockData.title })}
      </div>
      {children}
      <div className={styles.description}>
        {intl.formatMessage({ id: mockData.description })}
      </div>
      <div className={styles.buttons}>
        <Button
          variant="primarySmall"
          className={styles.button}
          onClick={!isExpired ? handleClose : loginHandler}
        >
          {intl.formatMessage({ id: mockData.buttons.primary })}
        </Button>
        <Button
          variant="secondarySmall"
          className={styles.button}
          onClick={!isExpired ? logoutHandler : handleClose}
        >
          {intl.formatMessage({ id: mockData.buttons.secondary })}
        </Button>
      </div>
    </div>
  );
};
