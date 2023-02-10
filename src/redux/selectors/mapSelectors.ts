import { createSelector } from "@reduxjs/toolkit";

import { SVGKeyType } from "../../pages/MapPage/MapFilters/SVGMap";

import { ItemForSelection } from "../../components/Selection/Selection";

import {
  getSimilarResultsFromLocalStorage,
  insideCurrentBounds,
  isBankOpen,
} from "../../utils/normalizeBranchDataHelpers";

import { StateType } from "../types/userTypes";

export const mapSelector = (state: StateType) => state.map;

export const banksSelector = (state: StateType) => state.map.cityBanksInfo;

export const filtersSelector = (state: StateType) => state.map.activeFilters;

export const currentBoundsSelector = (state: StateType) =>
  state.map.currentBounds;

export const createActiveServiceSelector = (backendKey: string) =>
  createSelector(mapSelector, (map) => map.activeFilters[backendKey]);

export const createCurrentBankSelector = (bankId: number) =>
  createSelector(mapSelector, (map) => map.cityBanksInfo?.[bankId]);

export const selectActiveFilters = createSelector(
  mapSelector,
  (map) => map.activeFilters
);

export const selectCurrentCity = createSelector(
  mapSelector,
  (map) => map.currentCity
);

export const selectIsFilterOpen = createSelector(
  mapSelector,
  (map) => map.isFilterOpen
);

export const selectSearchInput = createSelector(
  mapSelector,
  (map) => map.searchInput
);

export const selectCityNames = createSelector(
  mapSelector,
  selectSearchInput,
  (map, searchInput): ItemForSelection[] | null => {
    const similarResultsFromHistory =
      getSimilarResultsFromLocalStorage(searchInput);
    if (map.cities === null) return null;
    if (map.cities?.length === 0) return [];
    const mixedResultsArray = [...similarResultsFromHistory, ...map.cities];
    return mixedResultsArray.map((city, index) =>
      typeof city === "string"
        ? {
            id: index,
            value: city,
            iconName: "openNow" as SVGKeyType,
          }
        : {
            id: index,
            value: `${city.cityName}, ${city.country}`,
            iconName: "selectionCityMarker" as SVGKeyType,
          }
    );
  }
);

export const selectFilteredBanks = createSelector(
  filtersSelector,
  banksSelector,
  currentBoundsSelector,
  (activeFilters, banks, currentBounds) => {
    if (!banks || !currentBounds?.getCenter()) return banks;
    let filteredBanks = [...banks];

    if (activeFilters.openNow) {
      filteredBanks = filteredBanks.map((bank) => {
        if (isBankOpen(bank)) {
          return {
            ...bank,
            services: {
              ...bank.services,
              openNow: true,
            },
          };
        }
        return bank;
      });
    }

    return filteredBanks.filter((bank) =>
      Object.keys(activeFilters).every((service) => bank.services[service])
    );
  }
);

export const selectFilteredBanksWithCoordinates = createSelector(
  selectFilteredBanks,
  currentBoundsSelector,
  filtersSelector,
  (banks, currentBounds) => {
    if (!currentBounds) return banks;
    return banks?.filter((bank) => insideCurrentBounds(bank, currentBounds));
  }
);

export const selectCityBanksAmount = createSelector(
  mapSelector,
  (map) => map.cityBanksInfo?.length
);

export const selectActiveBranch = createSelector(
  mapSelector,
  (map) => map.activeBranch
);

export const createActiveBranchSelector = (branchId: number) =>
  createSelector(mapSelector, (map) => map.activeBranch === branchId);
