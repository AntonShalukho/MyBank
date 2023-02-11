import React, { useState, useEffect } from "react";

import { FormattedMessage } from "react-intl";

import axios from "axios";

import { Button } from "../../uikit/Button";

type SmsFormTimerType = {
  phoneNumber: string;
  enterAttempts: number;
  codeUrl: string;
  setErrorClassName: React.Dispatch<React.SetStateAction<boolean>>;
  setEnterAttempts: React.Dispatch<React.SetStateAction<number>>;
};

export const SmsFormTimer = ({
  phoneNumber,
  enterAttempts,
  codeUrl,
  setErrorClassName,
  setEnterAttempts,
}: SmsFormTimerType) => {
  const [seconds, setSeconds] = useState<number>(30);
  const [minutes, setMinutes] = useState<number>(0);
  const sendCodeAgain = () => {
    axios.post(codeUrl, { phoneNumber }).then(() => {
      setSeconds(30);
    });
  };

  useEffect(() => {
    if (enterAttempts === 0) {
      setMinutes(10);
      setSeconds(0);
    }
  }, [enterAttempts]);

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds) {
        setSeconds(seconds - 1);
      } else if (minutes) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        setEnterAttempts(3);
        setErrorClassName(false);
        clearInterval(myInterval);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [seconds, minutes]);

  return (
    <div>
      {minutes === 0 && seconds === 0 ? (
        <Button onClick={sendCodeAgain} className="sms-input_code-sending">
          <p className="sms-input_send-code-again">
            <FormattedMessage id="sendCodeAgain" />
          </p>
        </Button>
      ) : (
        <p className="sms-input-timer-text">
          <FormattedMessage id="timerTextMain" /> {minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}{" "}
          <FormattedMessage id="timerTextRest" />
        </p>
      )}
    </div>
  );
};
