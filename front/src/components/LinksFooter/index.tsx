import React from "react";

import { FormattedMessage } from "react-intl";

import { AppleMobileIcon, AndroidMobileIcon } from "../Icons";

import { config } from "../../config/config";

import "./LinksFooterStyles.css";

export const LinksFooter = () => (
  <div className="links-footer-wrapper">
    <div className="links-footer-affinity-text">
      © 2022 <FormattedMessage id="affinityBank" />
    </div>
    <div className="links-footer-links-wrapper">
      <a href={config.api.googlePlayStoreUrl} target="_blank" rel="noreferrer">
        <AndroidMobileIcon />
      </a>
      <a href={config.api.appleAppStoreUrl} target="_blank" rel="noreferrer">
        <AppleMobileIcon />
      </a>
      <span>
        <FormattedMessage id="mobileApplication" />
      </span>
    </div>
  </div>
);
