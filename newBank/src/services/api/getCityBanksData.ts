import { get } from ".";

export type CityResponse = {
  data: CityDataType;
  error?: Error;
};

export type CityDataType = {
  city: string;
  officeType: "Bank branch" | "ATM" | "Terminal";
  officeNumber: string;
  officeAddress: string;
  operationMode: {
    weekdayWorkingMode: string;
    saturdayWorkingMode: string;
    sundayWorkingMode: string;
    aroundClock: boolean;
  };
  latitude: string;
  longitude: string;
  services: string[];
  extraServices: string[];
}[];

export const getCityBanksData = (city: string) => {
  const configType =
    process.env.BUILD_TYPE === "development"
      ? ""
      : process.env.BUILD_TYPE === "production"
      ? "-main"
      : process.env.BUILD_TYPE === "production"
      ? "-release"
      : "";
  return get<CityDataType>({
    url: `https://abank-atm-ms${configType}.andersenlab.dev/a-banking/${city}/atms`,
  });
};
