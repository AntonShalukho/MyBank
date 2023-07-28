export const prettifyClock = (remainingTime: number): string => {
  if (remainingTime === 0) return "00 : 00";

  return `00 : ${
    (remainingTime - 1) / 2 < 5 ? `0${remainingTime - 1}` : remainingTime - 1
  }`;
};
