import { getApiInstance } from "../config/apiConfig/axiosConfig";

import { setSessionStorage } from "../lib/sessionStorageHandler";

type RequestArgsType = {
  url: string;
  body?: Record<string, string | boolean | number | object | null> | string;
};

export const post = <T>({ url, body = {} }: RequestArgsType): Promise<T> =>
  getApiInstance()({ method: "post", url, data: body })
    .then((response) => {
      const token = response.headers.authorization;
      token && setSessionStorage("token", token);
      return response.data;
    })
    .catch((err) => {
      if (!err?.response) {
        throw new Error("Network err");
      }
      throw err;
    });

export const get = <T>({ url }: RequestArgsType): Promise<T> =>
  getApiInstance()({ method: "get", url })
    .then((response) => response.data)
    .catch((err) => {
      if (!err?.response) {
        throw new Error("Network err");
      }
      throw err;
    });

export const patch = <T>({ url, body = {} }: RequestArgsType): Promise<T> =>
  getApiInstance()({ method: "patch", url, data: body })
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });

export const put = <T>({ url, body = {} }: RequestArgsType): Promise<T> =>
  getApiInstance()({ method: "put", url, data: body })
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
