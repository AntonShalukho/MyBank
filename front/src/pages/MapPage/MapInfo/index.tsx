import React, { Dispatch, ReactNode, useState } from "react";

import classNames from "classnames";

import { useSelector } from "react-redux";

import {
  selectFilteredBanks,
  selectIsFilterOpen,
} from "../../../redux/selectors/mapSelectors";

import { ToggleButtons } from "../ToggleButtons";

import { MapFilters } from "../MapFilters";

import "./MapInfoStyles.css";

export type MapInfoProps = {
  children: ReactNode;
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
};

export const MapInfo = ({ children, setIsModalOpen }: MapInfoProps) => {
  const [mounted, setMounted] = useState(true);
  const isFilterOpen = useSelector(selectIsFilterOpen);
  const filteredBanks = useSelector(selectFilteredBanks);

  return (
    <>
      <ToggleButtons
        mounted={mounted}
        setMounted={setMounted}
        showFiltersButton={!!filteredBanks}
        openMapFilters={isFilterOpen}
      />
      <div
        className={classNames("map-info-container", {
          disappear: !mounted,
        })}
      >
        <div
          className={classNames("bank-list-wrapper", {
            hidden: isFilterOpen || !filteredBanks,
          })}
        >
          {children}
        </div>

        <div
          className={classNames("map-filters-wrapper", {
            hidden: !isFilterOpen && filteredBanks && !isFilterOpen,
          })}
        >
          <MapFilters setIsModalOpen={setIsModalOpen} />
        </div>
      </div>
    </>
  );
};
