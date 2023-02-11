import React from "react";

import { ChangeNameInfo } from "./ChangeNameInfo";

import { ProfilePictureBlock } from "./ProfilePictureBlock";

import "./SettingsStyles.css";

export const Settings = () => (
  <div className="settings-wrapper">
    <ProfilePictureBlock />
    <ChangeNameInfo />
  </div>
);
