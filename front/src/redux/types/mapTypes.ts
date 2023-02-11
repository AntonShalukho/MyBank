import { LatLngBounds } from "leaflet";

import { CityResponse } from "../../services/api/getCityBanksData";

import { City } from "../../services/api/getCitiesList";

import { SVGKeyType } from "../../pages/MapPage/MapFilters/SVGMap";

export type HeaderId = "services" | "extraServices" | "operationMode";

export type NormalizedCityDataType = {
  id: number;
  city: string;
  officeType: "Bankbranch" | "ATM" | "Terminal";
  officeNumber: string;
  officeAddress: string;
  weekdayWorkingMode: string;
  saturdayWorkingMode: string;
  sundayWorkingMode: string;
  latitude: string;
  longitude: string;
  services: Record<string, boolean>;
}[];
export type BankType = NormalizedCityDataType[number];

export type DayKey =
  | "weekdayWorkingMode"
  | "saturdayWorkingMode"
  | "sundayWorkingMode";

export type FilterData = {
  headerId: HeaderId;
  filters: { nameId: SVGKeyType; backendKey: string }[];
};

export type Filter = FilterData["filters"][number];

export type CityData = CityResponse["data"];

export type MapActionType =
  | {
      type: "SET_CITIES_TO_STORE";
      payload: City[];
    }
  | {
      type: "SET_CITY_NOT_FOUND";
      payload: boolean;
    }
  | {
      type: "RESET_SEARCH";
    }
  | {
      type: "SET_CITY_BANKS_INFO";
      payload: CityResponse["data"];
    }
  | {
      type: "SET_FILTERS";
      payload: string;
    }
  | {
      type: "FILTER_MAP_DATA";
    }
  | {
      type: "SET_CITY_NOT_FOUND_ERROR";
      payload: boolean;
    }
  | {
      type: "SET_CURRENT_CITY";
      payload: string;
    }
  | {
      type: "SET_ACTIVE_BRANCH";
      payload: number | null;
    }
  | {
      type: "SET_CURRENT_BOUNDS";
      payload: LatLngBounds;
    }
  | {
      type: "TOGGLE_IS_FILTER_OPEN";
    }
  | {
      type: "SET_SEARCH_INPUT";
      payload: string;
    };

export type MapType = {
  cities: City[] | [] | null;
  cityData: CityData | null;
  cityBanksInfo: NormalizedCityDataType | null;
  currentCity: string | null;
  activeFilters: Record<string, boolean>;
  activeBranch: number | null;
  currentBounds: LatLngBounds | null;
  isFilterOpen: boolean;
  searchInput: string;
};
