import { config } from "../../config/config";
import { get } from ".";

export type TransactionType = {
  amount: number;
  currency: string;
  date: string;
  displayNumber: string;
  extra: null;
  recipient: string;
  type: string;
};

export type TransactionsResponseType = {
  data: TransactionType[];
  error?: Error;
};

export const getTransactionHistory = () =>
  get<TransactionType[]>({
    url: config.api.getTransactionHistoryData,
    auth: true,
  });
