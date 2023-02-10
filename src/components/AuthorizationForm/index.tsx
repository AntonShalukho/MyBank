import React, { useState } from "react";

import { FormattedMessage, useIntl } from "react-intl";

import { Link } from "react-router-dom";

import { TabNav } from "../../uikit/TabNav";

import { Button } from "../../uikit/Button";

import { AuthorizationFormByPhone } from "../../pages/LoginPage/AuthorizationFormByPhone";

import { AuthorizationFormByID } from "../../pages/LoginPage/AuthorizationFormByID";

import "./AuthorizationFormStyle.css";

export const AuthorizationForm = () => {
  const [selected, setSelected] = useState("byPhone");
  const toggleSelected = (tab: string) => {
    setSelected(tab);
  };

  const tabs = ["byPhone", "byPassport"];
  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h1 className="form-title">
          <FormattedMessage id="logInTitle" />
        </h1>
        <TabNav tabs={tabs} selected={selected} setSelected={toggleSelected}>
          {selected === "byPhone" ? <AuthorizationFormByPhone /> : null}
          {selected === "byPassport" ? <AuthorizationFormByID /> : null}
        </TabNav>
        <div className="form-links">
          <Link to="/demo">
            <FormattedMessage id="demoMode" />
          </Link>
          <Link to="/recovery">
            <FormattedMessage id="forgotPassword" />
          </Link>
        </div>
        <Link to="/registration">
          <Button variant="form" className="signUp-button">
            <FormattedMessage id="signUp" />
          </Button>
        </Link>
      </div>
    </div>
  );
};
