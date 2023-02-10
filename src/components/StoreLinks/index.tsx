import React from "react";

import { config } from "../../config/config";

import googleIcon from "../../uikit/static/landingIconGooglePlay.png";

import appleIcon from "../../uikit/static/landingIconAppStore.png";

import "./StoreLinksStyles.css";

export const StoreLinks = () => (
  <div className="store-links-wrapper">
    <a href={config.api.appleAppStoreUrl} target="_blank" rel="noreferrer">
      <img className="store-links-icon" src={appleIcon} alt="App Store" />
    </a>
    <a href={config.api.googlePlayStoreUrl} target="_blank" rel="noreferrer">
      <img className="store-links-icon" src={googleIcon} alt="Google Play" />
    </a>
  </div>
);
