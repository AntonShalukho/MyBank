import { config } from "../../config/config";
import { get } from ".";

export type LoanTypeDescription = {
  loanProduct: string;
  interestRate: number;
  paymentType: string;
  loanGuarantors: string;
  earlyRepayment: string;
  incomeStatement: string;
  minAmount: number;
  maxAmount: number;
  minPeriod: number;
  maxPeriod: number;
};

export type LoanResponseType = {
  data: LoanTypeDescription;
  error?: Error;
};

export const getLoanProductsDescription = (loanName: string) =>
  get<LoanTypeDescription>({
    url: config.api.getLoansProductsDescription + encodeURI(loanName),
  });
