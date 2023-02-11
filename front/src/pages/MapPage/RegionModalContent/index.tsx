import React from "react";

import { FormattedMessage } from "react-intl";

import { useSelector } from "react-redux";

import { selectUserCity } from "../../../redux/selectors/userSelectors";

import { CityInputWithSelection } from "../CityInputWithSelection";

import { FeaturedCities } from "../FeaturedCities.tsx";

import "./RegionModalContentStyles.css";

type RegionModalContentProps = {
  closeRegionModal: () => void;
};
export const RegionModalContent = ({
  closeRegionModal,
}: RegionModalContentProps) => {
  const city = useSelector(selectUserCity);
  return (
    <div className="region-modal-container">
      <h4>
        <FormattedMessage id="youAreHere" /> <b>{`${city}`}</b>
      </h4>
      <div className="region-modal-input-container">
        <CityInputWithSelection
          placeholderTextId="enterCityName"
          onSelect={closeRegionModal}
        />
      </div>
      <FeaturedCities closeRegionModal={closeRegionModal} />
    </div>
  );
};
