import React, { Dispatch, memo } from "react";

import { FormattedMessage } from "react-intl";

import { useSelector } from "react-redux";

import { Button } from "../../../uikit/Button";

import { selectCurrentCity } from "../../../redux/selectors/mapSelectors";

import { FiltersBlock } from "../FiltersBlock";

import { filtersData } from "./filtersData";

import { selectUserCity } from "../../../redux/selectors/userSelectors";

import { setSearchInput } from "../../../redux/actions/mapActions";

import { useTypedDispatch } from "../../../redux/store/store";

import "./MapFiltersStyles.css";

type MapFiltersProps = {
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
};

export const MapFilters = memo(({ setIsModalOpen }: MapFiltersProps) => {
  const dispatch = useTypedDispatch();
  const city = useSelector(selectCurrentCity);
  const userCity = useSelector(selectUserCity);
  const clickHandler = () => {
    setIsModalOpen(true);
    dispatch(setSearchInput(""));
  };

  return (
    <>
      <h3>
        <FormattedMessage id="filtersHeader" />{" "}
        {city || userCity ? (
          <Button className="filter-header-button" onClick={clickHandler}>
            in{" "}
            <span>
              {city ? `${city.split(",")[0]}` : `${userCity!.split(",")[0]}`}
            </span>
          </Button>
        ) : (
          ""
        )}
      </h3>
      {filtersData.map((filter) => (
        <FiltersBlock key={filter.headerId} {...filter} />
      ))}
    </>
  );
});
