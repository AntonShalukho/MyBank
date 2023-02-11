import React from "react";

import { FormattedMessage } from "react-intl";

import { Button } from "../../uikit/Button";

import backArrow from "../../uikit/static/backArrow.png";

import "./BackButtonStyles.css";

type BackButtonProps = {
  onClick: () => void;
};

export const BackButton = ({ onClick }: BackButtonProps) => (
  <Button className="back-button" onClick={onClick}>
    <img src={backArrow} alt="back" className="back-button-img" />
    <span className="back-button-text">
      <FormattedMessage id="backButton" />
    </span>
  </Button>
);
