import React, { useState, useEffect } from "react";

import { FormattedMessage } from "react-intl";

import { timeoutWorker } from "timeout-worker";

import { EmailFormTimerType } from "../../types";

import styles from "./EmailFormTimer.module.scss";

export const EmailFormTimer = ({ isExpiredMap }: EmailFormTimerType) => {
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(5);

  useEffect(() => {
    setMinutes(5);
    setSeconds(0);
  }, [isExpiredMap.isCodeExpired]);

  useEffect(() => {
    timeoutWorker.start();

    const timeoutRef = timeoutWorker.setTimeout(() => {
      if (seconds) {
        setSeconds(seconds - 1);
      } else if (minutes) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }, 1000);

    if (minutes === 0 && seconds === 0) {
      isExpiredMap.SetIsCodeExpired(true);
    }

    return () => {
      timeoutWorker.clearTimeout(timeoutRef);
    };
  }, [seconds, minutes]);

  return (
    <div className={styles.wrapper}>
      {isExpiredMap.isCodeExpired ? (
        <div className={styles.code_sending}>
          <FormattedMessage id="feature_expiredCode" />
        </div>
      ) : (
        <p className={styles.email_timer}>
          <FormattedMessage id="feature_resendCode" />{" "}
          <span className={styles.email_timer_numbers}>
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </span>
        </p>
      )}
    </div>
  );
};
