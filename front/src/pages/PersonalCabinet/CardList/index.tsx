import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import {
  VisaIcon,
  MasterCardIcon,
  LeftArrowIcon,
  RightArrowIcon,
} from "../../../components/Icons";

import { Card } from "../Card";

import { AddCardButton } from "../AddCardButton";

import { setCardsToStore } from "../../../redux/actions/userActions";

import { useTypedDispatch } from "../../../redux/store/store";

import { selectCards } from "../../../redux/selectors/userSelectors";

import { modifyCardDate } from "../../../utils/modifyCardDate";

import "./CardListStyles.css";

export const CardList = () => {
  const dispatch = useTypedDispatch();
  const cards = useSelector(selectCards);

  useEffect(() => {
    dispatch(setCardsToStore());
  }, [dispatch]);

  const CARD_WIDTH = 284;
  const MAX_OFFSET = cards ? -(CARD_WIDTH * cards.length) : 0;
  const [offset, setOffset] = useState(0);

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + CARD_WIDTH;
      return Math.min(newOffset, 0);
    });
  };

  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - CARD_WIDTH;
      return Math.max(newOffset, MAX_OFFSET);
    });
  };

  return (
    <>
      {!cards ? (
        <div className="card-list-wrapper">
          <AddCardButton />
        </div>
      ) : (
        <div className="slider-btn-wrapper">
          <div>
            <button
              disabled={offset === 0}
              type="button"
              onClick={handleLeftArrowClick}
              className="btn left-arrow-btn"
            >
              <LeftArrowIcon />
            </button>
            <button
              disabled={offset === MAX_OFFSET}
              type="button"
              onClick={handleRightArrowClick}
              className="btn right-arrow-btn"
            >
              <RightArrowIcon />
            </button>
          </div>
          <div className="slider-window">
            <ul
              style={{ transform: `translateX(${offset}px)` }}
              className="card-list-content-wrapper"
            >
              {cards &&
                cards.map((item) => (
                  <li
                    key={item.displayNumber}
                    className="card-list-content-item"
                  >
                    <Card
                      tariff={item.tariff}
                      displayNumber={item.displayNumber}
                      expirationDate={modifyCardDate(item.expirationDate)}
                      balance={item.balance.toLocaleString("us", {
                        minimumFractionDigits: 2,
                      })}
                      currency={item.currency}
                      paymentSystemIcon={
                        item.paymentSystem === "VISA" ? (
                          <VisaIcon />
                        ) : (
                          <MasterCardIcon />
                        )
                      }
                    />
                  </li>
                ))}
              <li>
                <AddCardButton />
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
