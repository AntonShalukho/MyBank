import { TransactionType } from "../../services/api/getTransactionHistory";

export type TransactionsType = {
  transactionHistory: TransactionType[] | null;
};

export type TransactionsActionType = {
  type: "SET_TRANSACTION_HISTORY";
  payload: TransactionType[];
};
