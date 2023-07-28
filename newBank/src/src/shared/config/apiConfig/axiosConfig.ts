import axios from "axios";

import { getSessionStorage } from "utils/sessionStorageHandler";

const commonHeaders: Record<string, string> = {
  accept: "*/*",
  "Content-type": "application/json",
};

axios.defaults.headers = commonHeaders;

export const getApiInstance = () => {
  const token = getSessionStorage("token");

  return axios.create({ headers: token ? { Authorization: token } : {} });
};
