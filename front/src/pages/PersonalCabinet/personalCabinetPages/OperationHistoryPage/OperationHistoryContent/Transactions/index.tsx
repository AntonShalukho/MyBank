import React from "react";

import "./TransactionsStyles.css";

type TransactionsType = {
  searchTerm: string;
};

export const Transactions = ({ searchTerm }: TransactionsType) => (
  <div>{`Transactions ${searchTerm} `}</div>
);
