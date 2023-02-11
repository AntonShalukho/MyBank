import React from "react";

import { ClearInputIcon, GreyWarningAmberIcon } from "../Icons";

import { Popup } from "../Popup";

import "./NotificationPopupStyles.css";

type NotificationPopupTypes = {
  text: JSX.Element;
};

export const NotificationPopup = ({ text }: NotificationPopupTypes) => (
  <Popup
    className="notification-popup-wrapper"
    buttonContent={<ClearInputIcon />}
  >
    <GreyWarningAmberIcon className="notification-popup-icon" />
    <p className="notification-popup-text">{text}</p>
  </Popup>
);
