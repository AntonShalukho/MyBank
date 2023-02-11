import { AnyAction } from "redux";

import { ThunkAction } from "redux-thunk";

import { LatLngExpression } from "leaflet";

import {
  CityResponse,
  getCityBanksData,
} from "../../services/api/getCityBanksData";

import { RootState } from "../store/store";

import {
  RESET_SEARCH,
  SET_CITIES_TO_STORE,
  SET_CITY_BANKS_INFO,
  SET_FILTERS,
  SET_CURRENT_CITY,
  FILTER_MAP_DATA,
  SET_ACTIVE_BRANCH,
  SET_CURRENT_BOUNDS,
  TOGGLE_IS_FILTER_OPEN,
  SET_SEARCH_INPUT,
} from "../actionTypes/mapActionTypes";

import {
  CitiesListResponse,
  City,
  getCitiesData,
} from "../../services/api/getCitiesList";

import { normalizeCityData } from "../../utils/normalizeBranchDataHelpers";

import { NormalizedCityDataType } from "../types/mapTypes";

export const setCitiesToStore = (data: City[]) => ({
  type: SET_CITIES_TO_STORE,
  payload: data,
});

export const resetSearch = () => ({
  type: RESET_SEARCH,
});

export const setFilters = (filter: string) => ({
  type: SET_FILTERS,
  payload: filter,
});

export const applyActiveFilters = () => ({
  type: FILTER_MAP_DATA,
});

export const toggleIsFilterOpen = () => ({
  type: TOGGLE_IS_FILTER_OPEN,
});

export const setCityBanksInfoToStore = (data: NormalizedCityDataType) => ({
  type: SET_CITY_BANKS_INFO,
  payload: data,
});

export const setCurrentCity = (city: string) => ({
  type: SET_CURRENT_CITY,
  payload: city,
});

export const setActiveBranch = (branchId: number | null) => ({
  type: SET_ACTIVE_BRANCH,
  payload: branchId,
});

export const setCurrentBounds = (bounds: LatLngExpression | null) => ({
  type: SET_CURRENT_BOUNDS,
  payload: bounds,
});

export const setSearchInput = (searchInput: string) => ({
  type: SET_SEARCH_INPUT,
  payload: searchInput,
});

export const setCitiesData =
  (
    searchInput: string
  ): ThunkAction<Promise<unknown> | null, RootState, unknown, AnyAction> =>
  (dispatch) => {
    if (!searchInput) {
      dispatch(resetSearch());
      return null;
    }
    return getCitiesData(searchInput.split(",")[0])
      .then((data) => {
        dispatch(setCitiesToStore(data));
      })
      .catch((err: Error) => {
        dispatch(setCitiesToStore([]));
        dispatch(setCurrentCity(""));
        throw err;
      });
  };
export const setCityBanksInfo =
  (
    value: string
  ): ThunkAction<Promise<unknown>, RootState, unknown, AnyAction> =>
  (dispatch) =>
    getCityBanksData(value.split(",")[0])
      .then((data) => {
        dispatch(setCityBanksInfoToStore(normalizeCityData(data)));
      })
      .catch((err: Error) => {
        dispatch(setCityBanksInfoToStore([]));
        throw err;
      });
