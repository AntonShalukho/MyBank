import React, { useContext } from "react";

import { Button } from "../../uikit/Button";

import { locales } from "../../translation/locales";

import { providerContext } from "../../translation/Provider";

import "./LanguageButtonsStyles.css";

export const LanguageButtons = () => {
  const context = useContext(providerContext);
  return (
    <div className="langs-btn-wrapper">
      {Object.values(locales).map((btnContent) => (
        <Button
          key={btnContent}
          className={`langButton ${
            context.isActive === btnContent ? "selectedLangBtn" : ""
          }`}
          onClick={() => {
            context.setIsActive(btnContent);
            localStorage.setItem("locale", btnContent);
          }}
        >
          {btnContent.charAt(0).toUpperCase() + btnContent.slice(1, 2)}
        </Button>
      ))}
    </div>
  );
};
