import React from "react";

import "./InfoBlockStyles.css";

interface InfoBlockProps {
  icon?: JSX.Element;
  phoneNumber: string;
  description: JSX.Element;
}

export const InfoBlock = ({
  icon,
  phoneNumber,
  description,
}: InfoBlockProps) => (
  <div className="info-block-wrapper">
    <div className="info-block-icon">{icon}</div>
    <div className="info-block-data-wrapper">
      <p className="info-block-number">{phoneNumber}</p>
      <p className="info-block-description">{description}</p>
    </div>
  </div>
);
