import { Popup } from "components_v2/Popup";

import { Spinner } from "uikit_v2/Spinner";

import { useState } from "react";

import { Header } from "src/widgets/Header";

import { LoginPageForm } from "src/widgets/LoginForm";

import { Advertisement } from "src/widgets/Advertisement";

import { SpinnerPopup } from "src/entities/SpinnerPopup";

import { useSpinner } from "src/shared/lib/hooks/useSpinner";

import styles from "./LoginPage.module.scss";

export const LoginPage = () => {
  const { isLoading, toggleSpinner } = useSpinner();
  const setAdvertisementLoading = (value: boolean) => toggleSpinner(value);

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.block}>
        {!isLoading && <LoginPageForm />}
        <Advertisement variant="login" setIsLoading={setAdvertisementLoading} />
      </div>
      {isLoading && <SpinnerPopup />}
    </div>
  );
};
