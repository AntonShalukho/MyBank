import React from "react";

import { FormattedMessage } from "react-intl";

import { AnimatedArrow } from "../../../components/AnimatedArrow";

import appleIcon from "../../../uikit/static/landingIconAppStore.png";

import googleIcon from "../../../uikit/static/landingIconGooglePlay.png";

import "./footerStyles.css";

export const Footer = () => (
  <div className="footer-wrapper">
    <AnimatedArrow />
    <div className="footer-download-section">
      <FormattedMessage id="downloadBanking" />
      <div className="footer-download-section-icons">
        <a
          href="https://www.apple.com/store"
          className="footer-download-section-link"
          target="_blank"
          rel="noreferrer"
        >
          <img src={appleIcon} alt="" />
        </a>
        <a
          href="https://play.google.com/store"
          className="footer-download-section-link"
          target="_blank"
          rel="noreferrer"
        >
          <img src={googleIcon} alt="" />
        </a>
      </div>
    </div>
  </div>
);
