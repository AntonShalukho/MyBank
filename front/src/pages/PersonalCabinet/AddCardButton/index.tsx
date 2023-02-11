import React from "react";

import { useIntl } from "react-intl";
import { NavLink } from "react-router-dom";

import { AddCardIcon } from "../../../components/Icons";

import "./AddCardButtonStyles.css";

export const AddCardButton = () => {
  const intl = useIntl();

  return (
    <NavLink className="add-button-wrapper" to="#">
      <AddCardIcon />
      <div className="add-button-title">
        {intl.formatMessage({ id: "addCard" })}
      </div>
    </NavLink>
  );
};
