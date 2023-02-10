export const modifyCardDate = (str: string) => {
  const modifiedDate = str.split(`-`).slice(0, 2);
  const year = modifiedDate[0].slice(2, 4);
  const month = modifiedDate[1];
  return `${month} / ${year}`;
};
