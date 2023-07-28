import React from "react";

import { Popup } from "components_v2/Popup";

import { useSelector } from "react-redux";

import { selectSpinner } from "redux/selectors/spinnerSelector";

import { Spinner } from "uikit_v2/Spinner";

import styles from "./SpinnerProvider.module.css";

type SpinnerProviderType = {
  children: React.ReactNode;
};

export const SpinnerProvider = ({ children }: SpinnerProviderType) => {
  const isLoading = useSelector(selectSpinner);

  return (
    <>
      {children}
      {isLoading && (
        <Popup className={styles.backdrop}>
          <Spinner />
        </Popup>
      )}
    </>
  );
};
