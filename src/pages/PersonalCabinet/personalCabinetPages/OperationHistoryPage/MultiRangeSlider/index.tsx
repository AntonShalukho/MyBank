import React, { useCallback, useEffect, useState, useRef } from "react";

import { FormattedMessage } from "react-intl";

import classnames from "classnames";

import { PoundSterlingIcon } from "../../../../../components/Icons";

import "./MultiRangeSliderStyles.css";

type MultiType = {
  min: number;
  max: number;
};

export const MultiRangeSlider = ({ min, max }: MultiType) => {
  const [minVal, setMinVal] = useState<number>(min);
  const [maxVal, setMaxVal] = useState<number>(max);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  const handleIncreaseValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(+event.target.value, minVal + 1);
    setMaxVal(value);
  };

  const handleDecreaseValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(+event.target.value, maxVal - 1);
    setMinVal(value);
  };

  const handleChangeInputTo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinVal(Number(event.target.value));
  };

  const handleChangeInputFrom = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMaxVal(Number(event.target.value));
  };

  return (
    <div className="multi-range-slider-container">
      <h2 className="filter-modal-content-sub-title">
        <FormattedMessage id="operationHistorySubtitleAmount" />
      </h2>
      <div className="multi-range-slider-poundStarling-wrapper">
        <label className="multi-range-slider-poundStarling-label">
          From
          <input
            type="text"
            className="multi-range-slider-poundStarling-item"
            value={minVal}
            onChange={handleChangeInputTo}
          />
          <PoundSterlingIcon className="multi-range-slider-poundStarling-icon" />
        </label>
        <label className="multi-range-slider-poundStarling-label">
          To
          <input
            type="text"
            className="multi-range-slider-poundStarling-item"
            value={maxVal}
            onChange={handleChangeInputFrom}
          />
          <PoundSterlingIcon className="multi-range-slider-poundStarling-icon" />
        </label>
      </div>
      <div className="multi-range-slider-wrapper">
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          ref={minValRef}
          onChange={handleDecreaseValue}
          className={classnames(
            "multi-range-slider__thumb multi-range-slider__thumb--zindex-3",
            {
              "thumb--zindex-5": minVal > max - 100,
            }
          )}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          ref={maxValRef}
          onChange={handleIncreaseValue}
          className="multi-range-slider__thumb multi-range-slider__thumb--zindex-4"
        />

        <div className="multi-range-slider">
          <div className="multi-range-slider__track" />
          <div ref={range} className="multi-range-slider__range" />
        </div>
      </div>
      <div className="multi-range-slider-value-wrapper">
        <div>0</div>
        <div>100,000,00.00</div>
      </div>
    </div>
  );
};
