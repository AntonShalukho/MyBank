import React from "react";

import { FormattedMessage } from "react-intl";

import { Link } from "react-router-dom";

import { Button } from "../../../../uikit/Button";

import "./ChangeNameInfoStyles.css";

export const ChangeNameInfo = () => (
  <>
    <div className="change-name-container with-horizontal-line">
      <h4>
        <FormattedMessage id="changeName" />
      </h4>
      <span>
        <FormattedMessage id="changeNameTextPart1" />
      </span>
      <Link to="/atms">
        <FormattedMessage id="branches" />
      </Link>
      <span>
        <FormattedMessage id="changeNameTextPart2" />
      </span>

      <h4>
        <FormattedMessage id="afterDivorceHeader" />
      </h4>
      <p>
        <FormattedMessage id="afterDivorceInfoPart1" />
      </p>
      <ul>
        <li>
          <FormattedMessage id="divorcePapers" />
        </li>
        <li>
          <FormattedMessage id="marriageCertificate" />
        </li>
      </ul>

      <p>
        <FormattedMessage id="oneOfTheFollowing" />
      </p>

      <ul>
        <li>
          <FormattedMessage id="birthCertificate" />
        </li>
        <li>
          <FormattedMessage id="deedPool" />
        </li>
        <li>
          <FormattedMessage id="register" />
        </li>
      </ul>
      <h4>
        <FormattedMessage id="anotherReasonHeader" />
      </h4>
      <p>
        <FormattedMessage id="anotherReasonText" />
      </p>
      <ul>
        <li>
          <FormattedMessage id="deedPool" />
        </li>
        <li>
          <FormattedMessage id="civilPartnership" />
        </li>
        <li>
          <FormattedMessage id="statDeclaration" />
        </li>
        <li>
          <FormattedMessage id="adoptionCertificate" />
        </li>
      </ul>
      <p>
        <FormattedMessage id="inScotland" />
      </p>
      <ul>
        <li>
          <FormattedMessage id="regOfCorrections" />
        </li>
        <li>
          <FormattedMessage id="amendedCertificate" />
        </li>
      </ul>
    </div>
    <Button variant="form" className="deactivate-button">
      <FormattedMessage id="deactivate" />
    </Button>
  </>
);
