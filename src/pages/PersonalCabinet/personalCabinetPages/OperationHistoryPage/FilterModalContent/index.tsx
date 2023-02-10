import React, { useEffect, useState } from "react";

import { FormattedMessage } from "react-intl";

import { useSelector } from "react-redux";

import { selectCards } from "../../../../../redux/selectors/userSelectors";

import { CategoriesBlock } from "../CategoriesBlock";

import { CardsBlock } from "../CardsBlock";

import { MultiRangeSlider } from "../MultiRangeSlider";

import "./FilterModalContentStyles.css";

export const FilterModalContent = () => {
  const [isCheckedCard, setIsCheckedCard] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const cards = useSelector(selectCards);

  useEffect(() => {
    if (cards) {
      const firstCardNumber = cards[0].displayNumber;
      setIsCheckedCard(firstCardNumber);
    }
  }, [cards]);

  return (
    <div className="filter-modal-content-wrapper">
      <h1 className="filter-modal-content-title">
        <FormattedMessage id="operationHistoryTitleFilters" />
      </h1>
      <MultiRangeSlider min={0} max={1000} />
      <CardsBlock
        isCheckedCard={isCheckedCard}
        setIsCheckedCard={setIsCheckedCard}
        // @ts-expect-error
        cards={cards}
      />
      <CategoriesBlock />
      <button
        type="button"
        disabled={isDisabled}
        className="filter-modal-content-apply-btn"
      >
        <FormattedMessage id="applyFilters" />
      </button>
      <button type="button" className="filter-modal-content-reset-btn">
        <FormattedMessage id="resetAllFilters" />
      </button>
    </div>
  );
};
