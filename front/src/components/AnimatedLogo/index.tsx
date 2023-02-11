import React from "react";

import { Link } from "react-router-dom";

import { getCookie } from "../../utils/cookieHandlers";

import { LogoIcon, AffinityBank } from "../Icons";

import "./animatedLogo.css";

export const AnimatedLogo = () => {
  const token = getCookie("token");
  return (
    <Link to={token ? "/cabinet" : "/"} className="link">
      <LogoIcon className="logo-icon" />
      <div className="logo-text_wrapper">
        <AffinityBank className="logo-text" />
      </div>
    </Link>
  );
};
