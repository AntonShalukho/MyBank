import {
  RESET_SEARCH,
  SET_ACTIVE_BRANCH,
  SET_CITIES_TO_STORE,
  SET_CITY_BANKS_INFO,
  SET_CURRENT_BOUNDS,
  SET_CURRENT_CITY,
  SET_FILTERS,
  TOGGLE_IS_FILTER_OPEN,
  SET_SEARCH_INPUT,
} from "../actionTypes/mapActionTypes";

import { MapType, MapActionType } from "../types/mapTypes";

export const initialState = {
  cities: null,
  cityData: null,
  cityBanksInfo: null,
  activeFilters: {},
  currentCity: null,
  activeBranch: null,
  currentBounds: null,
  isFilterOpen: false,
  searchInput: "",
};

export const mapReducer = (
  state: MapType = initialState,
  action: MapActionType
) => {
  switch (action.type) {
    case SET_CITIES_TO_STORE:
      return {
        ...state,
        cities: action.payload,
      };
    case SET_CITY_BANKS_INFO:
      return {
        ...state,
        cityBanksInfo: action.payload,
      };

    case SET_CURRENT_CITY:
      return {
        ...state,
        currentCity: action.payload,
      };

    case RESET_SEARCH:
      return {
        ...state,
        cities: null,
      };

    case SET_FILTERS: {
      const newFilters = { ...state.activeFilters };
      action.payload in state.activeFilters
        ? delete newFilters[action.payload]
        : (newFilters[action.payload] = true);
      return { ...state, activeFilters: newFilters };
    }
    case SET_ACTIVE_BRANCH:
      return { ...state, activeBranch: action.payload, isFilterOpen: false };

    case SET_CURRENT_BOUNDS:
      return { ...state, currentBounds: action.payload };
    case TOGGLE_IS_FILTER_OPEN: {
      return { ...state, isFilterOpen: !state.isFilterOpen };
    }
    case SET_SEARCH_INPUT:
      return { ...state, searchInput: action.payload };
    default:
      return state;
  }
};
