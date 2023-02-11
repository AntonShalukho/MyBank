import { useEffect, useState } from "react";

import { FormattedMessage, useIntl } from "react-intl";

import { LoanSection } from "./LoanSection";

import {
  LoanType,
  getLoanProducts,
} from "../../../../../services/api/getLoans";

import { Button } from "../../../../../uikit/Button";

import { LoanDescription } from "./LoanDescription";

import "./LoanProductPage.css";

export const LoanProductPage = () => {
  const [loans, setLoans] = useState<(LoanType & { id: number })[]>([]);
  const [selectedLoanName, setSelectedLoanName] = useState<string>("");

  useEffect(() => {
    if (!selectedLoanName) {
      getLoanProducts().then((data) => {
        setLoans(
          data.map((d, index) => ({
            id: index,
            loanProduct: d.loanProduct,
            description: d.description,
            interestRate: d.interestRate,
          }))
        );
      });
    }
  }, []);

  const handleApplyButtonClick = (name: string) => {
    setSelectedLoanName(name);
  };

  const resetLoanName = () => {
    setSelectedLoanName("");
  };

  const intl = useIntl();
  return !selectedLoanName ? (
    <>
      <div className="loan-product-page-wrapper">
        <h3 className="loan-product-main-title">Loan Products</h3>
        <div className="loan-product-card-container">
          {loans.map((loan, index) => (
            <LoanSection
              key={loan.id}
              title={loan.loanProduct}
              className={
                (index + 1) % 3 !== 0
                  ? "loan-product-small-card"
                  : "loan-product-big-card"
              }
              apr={loan.interestRate.toString()}
            >
              <div className="text-box-personalloan">
                <p className="loan-card-text">{loan.description}</p>
              </div>
              <div className="loan-card-find-box">
                <Button
                  variant="find"
                  type="submit"
                  onClick={() => handleApplyButtonClick(loan.loanProduct)}
                >
                  <FormattedMessage id="findButtonText" />
                </Button>
              </div>

              <Button variant="apply" type="submit">
                <FormattedMessage id="applyButtonText" />
              </Button>
            </LoanSection>
          ))}
        </div>
      </div>
    </>
  ) : (
    <div>
      <div className="selected-loan-name">{selectedLoanName}</div>
      <LoanDescription
        loanName={selectedLoanName}
        resetLoanName={resetLoanName}
      />
    </div>
  );
};
