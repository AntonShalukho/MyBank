import React, { useState, useEffect } from "react";

import { FormattedMessage } from "react-intl";

import styles from "./SmsFormTimer.module.css";

type IsExpiredType = {
  isCodeExpired: boolean;
  SetIsCodeExpired: (value: boolean) => void;
};

type SmsFormTimerType = {
  isExpiredMap: IsExpiredType;
};

export const SmsFormTimer = ({ isExpiredMap }: SmsFormTimerType) => {
  const [seconds, setSeconds] = useState<number>(30);
  const [minutes, setMinutes] = useState<number>(0);

  useEffect(() => {
    setSeconds(() => 30);
  }, [isExpiredMap.isCodeExpired]);

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds) {
        setSeconds(seconds - 1);
      } else if (minutes) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        clearInterval(myInterval);
      }
    }, 1000);
    if (minutes === 0 && seconds === 0) {
      isExpiredMap.SetIsCodeExpired(true);
    }
    return () => {
      clearInterval(myInterval);
    };
  }, [seconds, minutes]);

  return (
    <div className={styles.wrapper}>
      {isExpiredMap.isCodeExpired ? (
        <div className={styles.code_sending}>
          <FormattedMessage id="expiredCode" />
        </div>
      ) : (
        <p className={styles.sms_timer}>
          <FormattedMessage id="accountCanResendCode" />{" "}
          <span className={styles.sms_timer_numbers}>
            0:
            {seconds < 10 ? `0${seconds}` : seconds}
          </span>
        </p>
      )}
    </div>
  );
};
