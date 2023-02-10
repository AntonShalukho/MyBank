import React from "react";

import { PhotoIconBig, PhotoIconSmall } from "../../../../components/Icons";

import "./AvatarScaleStyles.css";

type AvatarScaleProps = {
  scale: number;
  onScaleChange: (value: string) => void;
};

export const AvatarScale = ({ scale, onScaleChange }: AvatarScaleProps) => (
  <div className="avatar-scale-wrapper">
    <div className="avatar-scale-icon-wrapper">
      <PhotoIconBig />
      <PhotoIconSmall />
    </div>
    <input
      name="scale"
      className="avatar-scale-range-input"
      type="range"
      min="1"
      max="3"
      step="0.01"
      value={scale}
      onChange={(e) => onScaleChange(e.target.value)}
    />
  </div>
);
