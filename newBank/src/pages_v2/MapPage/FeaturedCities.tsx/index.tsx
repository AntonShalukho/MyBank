import React from "react";

import { FormattedMessage } from "react-intl";

import { setCityToLocalStorage } from "../../../utils/normalizeBranchDataHelpers";

import {
  setCityBanksInfo,
  setCurrentCity,
  setSearchInput,
} from "../../../redux/actions/mapActions";

import { useTypedDispatch } from "../../../redux/store/store";

import { Button } from "../../../uikit/Button";

import "./FeaturedCitiesStyles.css";

const featuredCities = [
  "London, United Kingdom",
  "Madrid, Spain",
  "Batumi, Georgia",
  "Warsaw, Poland",
  "Kiev, Ukraine",
  "Saint Petersburg, Russia",
  "Namche Bazaar, Nepal",
];

type FeaturedCitiesProps = {
  closeRegionModal: () => void;
};

export const FeaturedCities = ({ closeRegionModal }: FeaturedCitiesProps) => {
  const dispatch = useTypedDispatch();
  const clickHandler = (city: string) => {
    setCityToLocalStorage(city);
    dispatch(setCurrentCity(city));
    dispatch(setCityBanksInfo(city.split(",")[0]));
    dispatch(setSearchInput(city));
    closeRegionModal();
  };
  return (
    <div className="featured-cities-container">
      <h4>
        <FormattedMessage id="featuredCities" />
      </h4>
      <div className="cities-buttons-container">
        {featuredCities.map((city) => (
          <Button
            onClick={() => clickHandler(city)}
            className="filter-button"
            key={city}
          >
            {city.split(",")[0]}
          </Button>
        ))}
      </div>
    </div>
  );
};
