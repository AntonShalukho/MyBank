import React, { useState } from "react";

import { FormattedMessage, useIntl } from "react-intl";

import { FilterIcon, Search } from "../../../../components/Icons";

import { TabNav } from "../../../../uikit/TabNav";

import { DropDown } from "./DropDown";

import { Expense } from "./OperationHistoryContent/Expense";

import { Income } from "./OperationHistoryContent/Income/Income";

import { Modal } from "../../../../components/Modal";

import { BackButton } from "../../../../components/BackButton";

import { FilterModalContent } from "./FilterModalContent";

import { Transactions } from "./OperationHistoryContent/Transactions";

import "./OperationHistoryPageStyles.css";

type OperationHistoryPageType = {
  isOperationHistory: () => void;
};

export const OperationHistoryPage: React.FC<OperationHistoryPageType> = (
  props
) => {
  const { isOperationHistory } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isModalOpen) {
    document.documentElement.style.overflow = "hidden";
  } else {
    document.documentElement.style.overflow = "";
  }

  const intl = useIntl();
  const tabs = ["transactions", "income", "expense"];
  const [selected, setSelected] = useState("transactions");
  const [searchTurm, setSearchTurm] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = () => {};
  return (
    <div className="operation-history-wrapper">
      <BackButton onClick={() => isOperationHistory()} />

      <div className="test">
        <h1 className="operation-history-page-main-title">
          <FormattedMessage id="operationHistory" />
        </h1>
        <h1 className="operation-history-page-sub-title">
          <FormattedMessage id="allOperations" />
        </h1>

        <div className="operation-history-container">
          <TabNav
            className="operation-history-nav-tab"
            tabs={tabs}
            selected={selected}
            setSelected={setSelected}
          >
            <form
              className="operation-history-tool-bar"
              onSubmit={handleSubmit}
            >
              <div className="operation-history-tool-bar-input-wrapper">
                <input
                  type="text"
                  className="operation-history-tool-bar-input"
                  placeholder={intl.formatMessage({ id: "search" })}
                  onChange={(e) => {
                    setSearchTurm(e.target.value);
                  }}
                />
                <Search className="operation-history-tool-bar-input-search-icon" />
              </div>
              <DropDown />
              <button
                type="button"
                className="operation-history-tool-bar-filter-btn"
                onClick={() => setIsModalOpen(true)}
              >
                <FilterIcon className="operation-history-tool-bar-filter-icon" />
                <FormattedMessage id="filters" />
              </button>
            </form>
            <div className="operation-history-content-container">
              {selected === "transactions" && (
                <Transactions searchTerm={searchTurm} />
              )}
              {selected === "income" && <Income />}
              {selected === "expense" && <Expense />}
            </div>
          </TabNav>
        </div>
      </div>

      {isModalOpen && (
        <Modal
          className="operation-history-modal"
          backdrop={true}
          onClose={() => setIsModalOpen(false)}
        >
          <FilterModalContent />
        </Modal>
      )}
    </div>
  );
};
