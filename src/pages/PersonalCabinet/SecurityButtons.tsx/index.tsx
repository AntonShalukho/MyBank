import React, { Dispatch } from "react";

import { useIntl } from "react-intl";

import { BigRightArrow } from "../../../components/Icons";

import { Button } from "../../../uikit/Button";

import { SecuritySVGMap, SecuritySVGMapKeyType } from "./SecuritySVGMap";

import "./SecurityButtonsStyles.css";

export const PASSWORD = "changePassword";
export const SECURITY_QUESTION = "changeSecurityQuestion";
export const securityOptions: SecuritySVGMapKeyType[] = [
  PASSWORD,
  SECURITY_QUESTION,
];

type SecurityButtonsType = {
  setOption: Dispatch<React.SetStateAction<string | null>>;
};

export const SecurityButtons = ({ setOption }: SecurityButtonsType) => {
  const intl = useIntl();
  const clickHandler = (option: string) => {
    setOption(option);
  };
  return (
    <div className="security-button-container">
      {securityOptions.map((option) => {
        const Icon = SecuritySVGMap[option];
        return (
          <Button key={option} onClick={() => clickHandler(option)}>
            <>
              <Icon />
              <div>{intl.formatMessage({ id: option })}</div>
              <BigRightArrow />
            </>
          </Button>
        );
      })}
    </div>
  );
};
