import { config } from "../../config/config";

import { get } from ".";

export type City = {
  cityName: string;
  country: string;
  latitude: string;
  longitude: string;
};

export type CitiesListResponse = {
  data: City[];
  error?: Error;
};

export const getCitiesData = (city: string) =>
  get<City[]>({ url: `${config.api.getCitiesData}${city}` });
