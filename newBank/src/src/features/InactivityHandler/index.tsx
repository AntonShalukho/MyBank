import React, { useState } from "react";

import { IdleTimerProvider } from "react-idle-timer";

import { deleteSessionStorage } from "utils/sessionStorageHandler";

import { useNavigate } from "react-router";

import { UserExpiredPopup } from "src/entities/UserExpiredPopup";

import { sendInvalidate } from "src/shared/api/services/sendInvalidate";

import { InactivityHandlerType } from "./types";

import { LOGOUT_TIMEOUT, TIMEOUT } from "./consts";

export const InactivityHandler = ({
  children,
  token,
}: InactivityHandlerType) => {
  const [isExpired, setIsExpired] = useState<boolean>(false);
  const [timeout, setTimeout] = useState<number>(TIMEOUT);
  const navigate = useNavigate();

  const onTimeout = () => {
    sendInvalidate().finally(() => {
      deleteSessionStorage("token");
      navigate("/");
    });
  };

  const onIdle = () => {
    if (timeout === TIMEOUT) {
      setTimeout(() => LOGOUT_TIMEOUT);
      setIsExpired(true);
    } else if (timeout === LOGOUT_TIMEOUT) {
      setTimeout(() => TIMEOUT);
      onTimeout();
    }
  };

  const onClose = () => setIsExpired(false);
  const stayOnSite = () => setTimeout(() => TIMEOUT);

  return (
    <IdleTimerProvider timeout={token ? timeout : undefined} onIdle={onIdle}>
      {children}
      {isExpired && (
        <UserExpiredPopup
          onClose={onClose}
          onTimeout={onTimeout}
          stayOnSite={stayOnSite}
        />
      )}
    </IdleTimerProvider>
  );
};
