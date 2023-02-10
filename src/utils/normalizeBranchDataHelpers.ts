import { LatLngBounds, LatLngTuple } from "leaflet";

import {
  BankType,
  CityData,
  NormalizedCityDataType,
} from "../redux/types/mapTypes";

export const timeChecker = (interval: string, unitedTime: number) => {
  const [open, close] = interval
    .split("-")
    .map((time) => +time.replace(":", ""));
  return unitedTime >= open && unitedTime <= close;
};

export const isBankOpen = (bank: BankType) => {
  const now = new Date();
  const day = now.getDay();
  const minutes = now.getMinutes();
  const formattedMinutes = minutes > 9 ? minutes : `0${minutes}`;
  const unitedTime = +`${now.getHours()}${formattedMinutes}`;
  switch (day) {
    case 0:
      return timeChecker(bank.sundayWorkingMode, unitedTime);
    case 6:
      return timeChecker(bank.saturdayWorkingMode, unitedTime);
    default:
      return timeChecker(bank.weekdayWorkingMode, unitedTime);
  }
};

export const normalizeCityData = (data: CityData): NormalizedCityDataType =>
  data.map((bank, index): BankType => {
    const flatBankData = { ...bank, ...bank.operationMode };
    const { extraServices, operationMode, aroundClock, ...normalizedBank } =
      flatBankData;
    bank.operationMode.aroundClock &&
      normalizedBank.services.push("aroundClock");
    bank.operationMode.sundayWorkingMode !== "weekend" &&
      normalizedBank.services.push("sundayWorkingMode");
    normalizedBank.services = [...bank.services, ...bank.extraServices];
    return {
      ...normalizedBank,
      id: index,
      // @ts-ignore
      officeType: normalizedBank.officeType.replace(/\s/g, ""),
      services: Object.fromEntries(
        normalizedBank.services.map((el) => [el, true])
      ),
    };
  });

export const timeIntervalFormatter = (value: string) => {
  if (value === "weekend") return "Closed";
  if (value.replace(/\s/g, "") === "00:00-24:00") return "24/7";
  const now = new Date();
  const timeLimits = value.split("-").map((time) => time.split(":"));
  return timeLimits
    .map((time) => {
      now.setHours(+time[0], +time[1]);
      return now.toLocaleString("en-US", {
        hour: "numeric",
        hour12: true,
      });
    })
    .join(" - ")
    .toLowerCase();
};

export const getCurrentWortkingTime = (
  bank: BankType,
  day: number = new Date().getDay()
) => {
  switch (day) {
    case 0: {
      return timeIntervalFormatter(bank.sundayWorkingMode);
    }
    case 6: {
      return timeIntervalFormatter(bank.saturdayWorkingMode);
    }
    default: {
      return timeIntervalFormatter(bank.weekdayWorkingMode);
    }
  }
};

export const insideCurrentBounds = (
  bank: BankType,
  currentBounds: LatLngBounds | null
) => {
  if (!currentBounds) return true;
  const coords: LatLngTuple = [+bank.latitude, +bank.longitude];
  return currentBounds.contains(coords);
};

const degreesToRadians = (degrees: number) => (degrees * Math.PI) / 180;

const distanceBetweenCoordinates = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) => {
  const earthRadiusKm = 6371;

  const dLat = degreesToRadians(lat2 - lat1);
  const dLon = degreesToRadians(lon2 - lon1);

  const lat1Rad = degreesToRadians(lat1);
  const lat2Rad = degreesToRadians(lat2);

  const directDistance =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) *
      Math.sin(dLon / 2) *
      Math.cos(lat1Rad) *
      Math.cos(lat2Rad);
  const curvatureCoefficient =
    2 * Math.atan2(Math.sqrt(directDistance), Math.sqrt(1 - directDistance));
  return earthRadiusKm * curvatureCoefficient;
};

export const calculateDistance = (
  userCoords: LatLngTuple,
  bankCoords: LatLngTuple
) => {
  const [userLat, userLng] = userCoords;
  const [bankLat, bankLng] = bankCoords;
  const distance = distanceBetweenCoordinates(
    userLat,
    userLng,
    bankLat,
    bankLng
  ).toFixed(2);
  return +distance > 100 ? ">100" : distance;
};

export const getSimilarResultsFromLocalStorage = (searchInput: string) => {
  const searchHistoryArray: string[] = JSON.parse(
    localStorage.getItem("searchHistory") || "[]"
  );
  return searchHistoryArray?.filter((search) =>
    search.toLowerCase().includes(searchInput.toLowerCase())
  );
};

export const setCityToLocalStorage = (city: string) => {
  const searchHistoryJSON = localStorage.getItem("searchHistory");
  const searchHistorySet = searchHistoryJSON
    ? new Set(JSON.parse(searchHistoryJSON))
    : new Set();
  !searchHistorySet.has(city) &&
    !searchHistorySet.has(city.toLowerCase()) &&
    searchHistorySet.add(city);
  localStorage.setItem(
    "searchHistory",
    JSON.stringify(Array.from(searchHistorySet))
  );
};
