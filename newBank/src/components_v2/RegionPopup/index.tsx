import React, { Dispatch, useState } from "react";

import { createPortal } from "react-dom";

import { FormattedMessage } from "react-intl";

import { useSelector } from "react-redux";

import { selectUserCity } from "../../redux/selectors/userSelectors";

import { Button } from "../../uikit/Button";

import { MyLocation } from "../Icon";

import "./RegionPopupStyles.css";

const modalRootRef = document.querySelector("#modal-root")!;

type RegionPopupProps = {
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
};

export const RegionPopup = ({ setIsModalOpen }: RegionPopupProps) => {
  const userLocation = useSelector(selectUserCity);
  const location = userLocation?.split(",")[0];
  const [isOpen, setIsOpen] = useState(true);
  const handleClosePopup = () => {
    setIsOpen(false);
  };
  const handleChangeRegion = () => {
    setIsModalOpen(true);
    setIsOpen(false);
  };
  return createPortal(
    location && isOpen && (
      <div className="region-popup-wrapper">
        <p className="region-popup-sub-title">
          <FormattedMessage id="region" />
        </p>
        <div className="region-popup-title-wrapper">
          <MyLocation />
          <h1 className="region-popup-title">{location}</h1>
        </div>
        <div className="region-popup-btn-wrapper">
          <Button
            className="region-popup-correct-btn"
            onClick={handleClosePopup}
          >
            <FormattedMessage id="btnCorrect" />
          </Button>
          <Button
            className="region-popup-change-btn"
            onClick={handleChangeRegion}
          >
            <FormattedMessage id="btnChange" />
          </Button>
        </div>
      </div>
    ),
    modalRootRef
  );
};
