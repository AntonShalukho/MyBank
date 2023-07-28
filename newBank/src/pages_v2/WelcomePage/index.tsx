import React from "react";

import { useLocation } from "react-router";

import { Header } from "../../components_v2/Header";

import { ProgressBar } from "./Registration/ProgressBar";

import { StepConfig } from "./Registration/StepConfig";

import { SIGN_UP_PATH, THE_END_REGISTRATION_STEP } from "../../utils/variables";

import styles from "./WelcomePage.module.css";

export const WelcomePage = () => {
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
