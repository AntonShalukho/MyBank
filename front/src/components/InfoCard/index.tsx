import React from "react";

import "./InfoCardStyles.css";

interface InfoCardProps {
  title: JSX.Element;
  icon?: JSX.Element;
  description?: JSX.Element;
  workSchedule: JSX.Element;
}

export const InfoCard = ({
  title,
  icon,
  description,
  workSchedule,
}: InfoCardProps) => (
  <div className="info-card-wrapper">
    <div className="title-wrapper">
      <h2 className="info-card-title">{title}</h2>
      <div className="info-card-icon">{icon}</div>
    </div>
    <p className="info-card-description">{description}</p>
    <p className="info-card-work-schedule">{workSchedule}</p>
  </div>
);
