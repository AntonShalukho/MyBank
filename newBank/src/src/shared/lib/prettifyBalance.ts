export const prettifyBalance = (balance: number | string): string => {
  if (typeof balance === "string") {
    return "";
  }

  const spaceBalance = new Intl.NumberFormat().format(+balance);
  return Number.isInteger(+balance) ? `${spaceBalance},00` : spaceBalance;
};
