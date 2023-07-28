import React from "react";

import { useIntl } from "react-intl";

import { Button } from "../../uikit/Button";

import backArrow from "../../uikit/static/backArrow.png";

import "./BackButtonStyles.css";

type BackButtonProps = {
  onClick: () => void;
};

export const BackButton = ({ onClick }: BackButtonProps) => {
  const intl = useIntl();
  return (
    <Button className="back-button" onClick={onClick}>
      <img src={backArrow} alt="back" className="back-button-img" />
      <span className="back-button-text">
        {intl.formatMessage({ id: "backButton" })}
      </span>
    </Button>
  );
};
