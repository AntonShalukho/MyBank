export const prettifyBalance = (balance: number | string): string => {
  const spaceBalance = new Intl.NumberFormat()
    .format(+balance)
    .replace(",", ", ");
  return Number.isInteger(+balance) ? `${spaceBalance}, 00` : spaceBalance;
};
