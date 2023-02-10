import { ListOfAccountType } from "../../../../../../services/api/getListOfAccounts";
import { PLN, USD, EUR } from "../constants";

const getFullTime = (time: string): number => new Date(time).getTime();

const getSortByDate = (prod: ListOfAccountType[]): ListOfAccountType[] =>
  prod.sort((prodA, prodB) => {
    const timeA = getFullTime(prodA.openDate);
    const timeB = getFullTime(prodB.openDate);
    if (timeA < timeB) return -1;
    if (timeA === timeB) return 0;
    return 1;
  });

export const getFilteredProducts = (
  product: ListOfAccountType[]
): ListOfAccountType[] => {
  const filteredPLN = product.filter((prod) => prod.currency.name === PLN);
  const filteredUSD = product.filter((prod) => prod.currency.name === USD);
  const filteredEUR = product.filter((prod) => prod.currency.name === EUR);
  const sortedProductsPLN = getSortByDate(filteredPLN);
  const sortedProductsUSD = getSortByDate(filteredUSD);
  const sortedProductsEUR = getSortByDate(filteredEUR);
  const filteredProducts = sortedProductsPLN;
  sortedProductsUSD.forEach((prod) => filteredProducts.push(prod));
  sortedProductsEUR.forEach((prod) => filteredProducts.push(prod));
  return filteredProducts;
};
