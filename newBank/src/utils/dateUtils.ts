import { length } from "ramda";

export const modifyCardDate = (str: string) => {
  const modifiedDate = str.split(`-`).slice(0, 2);
  const year = modifiedDate[0].slice(2, 4);
  const month = modifiedDate[1];
  return `${month} / ${year}`;
};

export const getDateMack = (date: string): string => {
  if (length(date) < 3) return date;

  const dateMap = date.split("");
  const resolve = dateMap.filter((item) => item !== "/");
  resolve.splice(2, 0, "/");
  if (length(resolve) >= 6) {
    resolve.splice(5, 0, "/");
  }
  return resolve.join("");
};
