import React from "react";

import { useIntl } from "react-intl";

import { useNavigate } from "react-router";

import { Popup } from "src/entities/Popup";

import { CancelRegistrationPopupContent } from "src/entities/CancelRegistrationPopupContent";

import { deleteCookie } from "../../shared/lib/cookieHandlers";

import { PopupContentType } from "./types";

export const CancelRegistrationPopup = ({
  onClose,
  handleSideEffects,
}: PopupContentType) => {
  const navigate = useNavigate();
  const intl = useIntl();

  const handleCancel = () => onClose();

  const handleConfirm = () => {
    handleSideEffects ? handleSideEffects() : navigate("/");
    deleteCookie("uuid");
  };

  return (
    <Popup>
      <CancelRegistrationPopupContent
        handleCancel={handleCancel}
        handleConfirm={handleConfirm}
      />
    </Popup>
  );
};
