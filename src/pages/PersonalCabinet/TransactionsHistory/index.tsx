import React, { useEffect } from "react";

import { FormattedMessage } from "react-intl";

import { useSelector } from "react-redux";

import { useTypedDispatch } from "../../../redux/store/store";

import { setTransactionHistoryToStore } from "../../../redux/actions/transactionActions";

import { selectFirstThreeTransactions } from "../../../redux/selectors/transactionSelectors";

import { TransactionType } from "../../../services/api/getTransactionHistory";

import { NoTransactionImage, Transaction } from "../../../components/Icons";

import "./TransactionsHistoryStyles.css";

type IsMainPageType = {
  isMainPage: () => void;
};

export const TransactionsHistory = ({ isMainPage }: IsMainPageType) => {
  const dispatch = useTypedDispatch();
  const transactionHistory = useSelector(selectFirstThreeTransactions);

  useEffect(() => {
    dispatch(setTransactionHistoryToStore());
  }, [dispatch]);

  return (
    <>
      {!transactionHistory && (
        <div className="no-transactions-wrapper">
          <NoTransactionImage className="no-transactions-image" />
          <h1 className="no-transactions-title">
            <FormattedMessage id="noTransactionTitle" />
          </h1>
          <p className="no-transactions-description">
            <FormattedMessage id="noTransactionDescription" />
          </p>
        </div>
      )}

      {transactionHistory && (
        <div className="transactions-list">
          <table>
            <tbody>
              {transactionHistory?.map((transaction: TransactionType) => {
                const date = new Date(transaction.date);
                return (
                  <tr
                    key={`${transaction.amount}${transaction.displayNumber}`}
                    className="transaction-item"
                  >
                    <td className="transaction-date">
                      <div>
                        {date.toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                        })}
                      </div>
                      <div className="transaction-date-time">
                        {date.toLocaleTimeString("en-US", {
                          hour: "numeric",
                          hour12: false,
                          minute: "numeric",
                        })}
                      </div>
                    </td>
                    <td className="transaction-icon-wrapper">
                      <Transaction className="transaction-icon" fill="white" />
                    </td>
                    <td className="transaction-info">
                      <div className="transaction-info-type">
                        <FormattedMessage id={transaction.type.toLowerCase()} />
                      </div>
                      <span className="transaction-info-display-number">{`*${transaction.displayNumber}`}</span>
                      <span className="transaction-info-recipient">
                        {transaction.recipient}
                      </span>
                    </td>
                    <td className="transaction-amount">
                      <span className="transaction-sum">
                        {transaction.amount}
                      </span>
                      <span>{transaction.currency}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button
            type="button"
            className="transactions-list-show-all-btn"
            onClick={() => isMainPage()}
          >
            Show all
          </button>
        </div>
      )}
    </>
  );
};
