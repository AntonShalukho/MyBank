import { ibanRegExp } from "../../../../../../regexs";

export const format = (iban: string): string => {
  const ibanMap = ibanRegExp.exec(iban);
  if (ibanMap) {
    return ibanMap.slice(1).join(" ");
  }
  return "";
};
