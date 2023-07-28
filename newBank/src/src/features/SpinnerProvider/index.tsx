import React from "react";

import { SpinnerPopup } from "src/entities/SpinnerPopup";

import { useSpinner } from "src/shared/lib/hooks/useSpinner";

import { SpinnerProviderType } from "./types";

export const SpinnerProvider = ({ children }: SpinnerProviderType) => {
  const { isLoading } = useSpinner();

  return (
    <>
      {children}
      {isLoading && <SpinnerPopup />}
    </>
  );
};
