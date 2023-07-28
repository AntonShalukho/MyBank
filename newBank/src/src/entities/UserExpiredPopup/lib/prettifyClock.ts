export const prettifyClock = (remainingTime: number): string =>
  `00 : ${
    (remainingTime - 1) / 2 < 5 ? `0${remainingTime - 1}` : remainingTime - 1
  }`;
