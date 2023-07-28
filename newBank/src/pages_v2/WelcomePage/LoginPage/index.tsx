import { Popup } from "components_v2/Popup";

import { Spinner } from "uikit_v2/Spinner";

import { useState } from "react";

import { Header } from "../../../components_v2/Header";

import { LoginPageForm } from "./LoginPageForm";

import { Advertisement } from "../../MainPage/Advertisement";

import styles from "./LoginPage.module.css";

export const LoginPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const setAdvertisementLoading = (value: boolean) => setIsLoading(value);

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.block}>
        {!isLoading && <LoginPageForm />}
        <Advertisement variant="login" setIsLoading={setAdvertisementLoading} />
      </div>
      {isLoading && (
        <Popup className={styles.popup}>
          <Spinner />
        </Popup>
      )}
    </div>
  );
};
