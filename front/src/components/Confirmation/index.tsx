import React, { ReactNode } from "react";

import { FormattedMessage } from "react-intl";

import { Button } from "../../uikit/Button";

import confirmationImg from "../../uikit/static/confirmationImg.svg";

import "./ConfirmationStyles.css";

export type ConfirmationProps = {
  onButtonClick: () => void;
  children: ReactNode;
};

export const Confirmation: React.FC<ConfirmationProps> = ({
  children,
  onButtonClick,
}) => (
  <div className="confirmation-container">
    <h1 className="confirmation-heading">
      <FormattedMessage id="congrats" />
    </h1>
    <div className="confirmation-message">{children}</div>
    <img src={confirmationImg} alt="" className="confirmation-img" />
    <Button variant="form" onClick={onButtonClick}>
      <FormattedMessage id="logInTitle" />
    </Button>
  </div>
);
