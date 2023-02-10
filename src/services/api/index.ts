import axios from "axios";

import { getCookie } from "../../utils/cookieHandlers";

type RequestArgsType = {
  url: string;
  auth?: boolean;
  body?: Record<string, string | boolean | number | object> | string;
  requestHeaders?: Record<string, string>;
};

const commonHeaders: Record<string, string> = {
  accept: "*/*",
  "Content-type": "application/json",
};

export const post = <T>({
  url,
  auth = true,
  body = {},
  requestHeaders = {},
}: RequestArgsType): Promise<T> => {
  const headers = { ...commonHeaders, ...requestHeaders };
  const token = getCookie("token");
  if (auth && token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const myAxios = axios.create();
  return myAxios({ method: "post", url, data: body, headers })
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};

export const get = <T>({
  url,
  auth = true,
  requestHeaders = {},
}: RequestArgsType): Promise<T> => {
  const headers = { ...commonHeaders, ...requestHeaders };
  const token = getCookie("token");
  if (auth && token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const myAxios = axios.create();
  return myAxios({ method: "get", url, headers })
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};

export const patch = <T>({
  url,
  auth = true,
  body = {},
  requestHeaders = {},
}: RequestArgsType): Promise<T> => {
  const headers = { ...commonHeaders, ...requestHeaders };
  const token = getCookie("token");
  if (auth && token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const myAxios = axios.create();
  return myAxios({ method: "patch", url, data: body, headers })
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};

export const put = <T>({
  url,
  auth = true,
  body = {},
  requestHeaders = {},
}: RequestArgsType): Promise<T> => {
  const headers = { ...commonHeaders, ...requestHeaders };
  const token = getCookie("token");
  if (auth && token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const myAxios = axios.create();
  return myAxios({ method: "put", url, data: body, headers })
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};
