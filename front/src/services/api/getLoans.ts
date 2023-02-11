import { config } from "../../config/config";
import { get } from ".";

export type LoanType = {
  loanProduct: string;
  interestRate: number;
  description: string;
};

export type LoanResponseType = {
  data: LoanType[];
  error?: Error;
};

export const getLoanProducts = () =>
  get<LoanType[]>({
    url: config.api.getLoansProducts,
  });
