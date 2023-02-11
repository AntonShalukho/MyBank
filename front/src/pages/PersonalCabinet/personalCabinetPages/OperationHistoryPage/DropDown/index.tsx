import React, { useEffect, useState } from "react";

import { FormattedMessage } from "react-intl";

import { DropdownIcon, SwapVertIcon } from "../../../../../components/Icons";

import "./DropDownStyles.css";

export const DropDown = () => {
  const [showMenu, setShowMenu] = useState(false);

  const options = [
    "amountLowToHigh",
    "amountHighToLow",
    "dateNewToOld",
    "dateOldToNew",
  ];

  useEffect(() => {
    const handler = () => setShowMenu(false);
    window.addEventListener("click", handler);

    return () => {
      window.removeEventListener("click", handler);
    };
  });

  const handleInputClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const handleItemClick = (option: string) => {};

  return (
    <div
      className={
        showMenu
          ? "drop-down-container drop-down-menu-container"
          : "drop-down-container"
      }
    >
      <button
        type="button"
        onClick={handleInputClick}
        className="drop-down-input"
      >
        {showMenu && (
          <div className="drop-down-menu">
            {options.map((option) => (
              <button
                className="drop-down-menu-item"
                type="button"
                key={option}
                onClick={() => handleItemClick(option)}
              >
                <FormattedMessage id={option} />
              </button>
            ))}
          </div>
        )}

        <div className="drop-down-tool">
          <SwapVertIcon className="drop-down-swap-vert-icon" />
          <div className="drop-down-input-placeholder">
            <FormattedMessage id="sortedBy" />
          </div>
        </div>
        <DropdownIcon className="drop-down-dropdown-icon" />
      </button>
    </div>
  );
};
