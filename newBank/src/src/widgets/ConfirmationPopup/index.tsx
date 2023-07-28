import React from "react";

import { Popup } from "src/entities/Popup";

import { ConfirmationForm } from "src/features/ConfirmationForm";

import { ConfirmationFormType } from "src/features/ConfirmationForm/types";

export const ConfirmationPopup = ({
  onClose,
  onSuccessResponse,
  resendVerifyCode,
}: ConfirmationFormType) => (
  <Popup>
    <ConfirmationForm
      onClose={onClose}
      onSuccessResponse={onSuccessResponse}
      resendVerifyCode={resendVerifyCode}
    />
  </Popup>
);
