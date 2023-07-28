export const getCopiedValue = (iban: string) => {
  const value = iban.replaceAll(" ", "");
  document.execCommand("copy", undefined, value);
};
