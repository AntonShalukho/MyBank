export const capitalizeFirstLetter = (str: string) =>
  `${str.slice(0, 1).toUpperCase()}${str.slice(1).toLocaleLowerCase()}`;
