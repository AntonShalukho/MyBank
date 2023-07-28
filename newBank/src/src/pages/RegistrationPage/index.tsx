import React from "react";

import { useLocation } from "react-router";

import { Header } from "../../widgets/Header";

import { StepConfig } from "./config";

import { SIGN_UP_PATH } from "../../shared/consts";

import { THE_END_REGISTRATION_STEP } from "../../shared/consts/Registration";

import { ProgressBar } from "../../widgets/registration/ProgressBar";

import styles from "./Registration.module.scss";

export const RegistrationPage = () => {
  const { pathname } = useLocation();

  const isCongratulationPage = (): boolean =>
    pathname === `${SIGN_UP_PATH}/${THE_END_REGISTRATION_STEP}`;

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        {!isCongratulationPage() && <ProgressBar />}
        <StepConfig />
      </div>
    </div>
  );
};
