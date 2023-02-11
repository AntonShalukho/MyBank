import React, { useEffect, useState } from "react";
import { LoanDescripitionProps } from "src/pages/types";

import { BackButton } from "../../../../../../components/BackButton";

import {
  getLoanProductsDescription,
  LoanTypeDescription,
} from "../../../../../../services/api/getLoansDescription";

import "./LoanDescriptionStyles.css";

import { Button } from "../../../../../../uikit/Button";

import { FormattedMessage, useIntl } from "react-intl";

export const LoanDescription: React.FC<LoanDescripitionProps> = ({
  loanName,
  resetLoanName,
}) => {
  const [loansDescription, setLoansDescription] =
    useState<LoanTypeDescription>();

  useEffect(() => {
    getLoanProductsDescription(loanName).then((data) => {
      setLoansDescription(data);
    });
  }, []);

  const handleBackButtonClick = () => {
    resetLoanName();
  };

  const intl = useIntl();
  return (
    <>
      <div className="back-button-description">
        <BackButton onClick={() => handleBackButtonClick()} />
      </div>

      <div className="loan-description-wrapper">
        <div className="table-container">
          <div className="table-title">
            <p className="description-text-title">Credit terms</p>
          </div>

          <div className="table-apr">
            <div className="table-apr-name">
              <p className="description-text">APR, Interest rate</p>
            </div>
            <div className="table-apr-value">
              <p className="description-text-data">
                {loansDescription?.interestRate}%
              </p>
            </div>
          </div>

          <div className="table-guarantors">
            <div className="table-guarantors-name">
              <p className="description-text">Loan guarantors</p>
            </div>
            <div className="table-guarantors-value">
              <p className="description-text-data">
                {loansDescription?.loanGuarantors}
              </p>
            </div>
          </div>

          <div className="table-repayment">
            <div className="table-repayment-name">
              <p className="description-text">Early repayment</p>
            </div>
            <div className="table-repayment-value">
              <p className="description-text-data">
                {loansDescription?.earlyRepayment}
              </p>
            </div>
          </div>

          <div className="table-statement">
            <div className="table-statement-name">
              <p className="description-text">Income statement</p>
            </div>
            <div className="table-statement-value">
              <p className="description-text-data">
                {loansDescription?.incomeStatement}
              </p>
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <div className="amount">
            <div className="amount-min">
              <p className="bottom-text">Min Amount</p>
              <p className="amount-min-value">{loansDescription?.minAmount}</p>
            </div>
            <div className="amount-max">
              <p className="bottom-text">Max Amount</p>
              <p className="amount-max-value">{loansDescription?.maxAmount}</p>
            </div>
          </div>
          <div className="amount-graf" />

          <div className="period">
            <div className="period-min">
              <p className="bottom-text">Min Period</p>
              <p className="period-min-value">{loansDescription?.minPeriod}</p>
            </div>
            <div className="period-max">
              <p className="bottom-text">Max Period</p>
              <p className="period-max-value">{loansDescription?.maxPeriod}</p>
            </div>
          </div>
          <div className="period-graf" />
        </div>
        <Button variant="applyDescription" type="submit">
          <FormattedMessage id="applyButtonText" />
        </Button>
      </div>
    </>
  );
};
