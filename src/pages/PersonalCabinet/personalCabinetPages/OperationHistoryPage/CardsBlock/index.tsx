import React, { useState } from "react";

import { FormattedMessage } from "react-intl";

import {
  SmallVisaIcon,
  SmallMasterCardIcon,
} from "../../../../../components/Icons";

import { modifyCardDate } from "../../../../../utils/modifyCardDate";

import { CardType } from "../../../../../services/api/getCardList";

import { SmallCard } from "./SmallCard";

import "./CardsBlockStyles.css";

type CardsBlockTypes = {
  isCheckedCard: string;
  setIsCheckedCard: React.Dispatch<React.SetStateAction<string>>;
  cards: CardType[];
};

export const CardsBlock = ({
  isCheckedCard,
  setIsCheckedCard,
  cards,
}: CardsBlockTypes) => {
  const [isShowMore, setIsShowMore] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedCard(event.target.value);
  };

  const handleClick = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <div className="cards-block-wrapper">
      <h2 className="filter-modal-content-sub-title">
        <FormattedMessage id="operationHistorySubtitleCards" />
      </h2>
      <ul
        className={
          isShowMore
            ? "cards-block-card-list show-more"
            : "cards-block-card-list"
        }
      >
        {cards &&
          cards.map((item) => (
            <li key={item.displayNumber} className="cards-block-card-item">
              <label className="cards-block-card-label">
                <input
                  className="cards-block-card-input"
                  type="radio"
                  name="card"
                  value={item.displayNumber}
                  onChange={handleChange}
                  checked={isCheckedCard === item.displayNumber}
                />
                <span className="cards-block-card-checkbox" />
                {item.tariff}
              </label>
              <div className="cards-block-card">
                <SmallCard
                  tariff={item.tariff}
                  displayNumber={item.displayNumber}
                  expirationDate={modifyCardDate(item.expirationDate)}
                  balance={item.balance.toLocaleString("us", {
                    minimumFractionDigits: 2,
                  })}
                  currency={item.currency}
                  paymentSystemIcon={
                    item.paymentSystem === "VISA" ? (
                      <SmallVisaIcon />
                    ) : (
                      <SmallMasterCardIcon />
                    )
                  }
                />
              </div>
            </li>
          ))}
        <li />
      </ul>

      <button
        type="button"
        onClick={handleClick}
        className="cards-block-card-show-more-btn"
      >
        {isShowMore ? (
          <FormattedMessage id="showLess" />
        ) : (
          <FormattedMessage id="showMore" />
        )}
      </button>
    </div>
  );
};
