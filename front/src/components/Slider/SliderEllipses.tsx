import React from "react";

import { Ellipse } from "../Icons";

import { sliderContent } from "./sliderContent";

import "./SliderStyles.css";

type SliderCardProps = {
  updateActiveEllipse?: (activeIndex: number) => void;
  activeIndex?: number | undefined;
};

export const SliderEllipses = ({
  updateActiveEllipse,
  activeIndex,
}: SliderCardProps) => (
  <div className="slider-wrapper">
    {sliderContent.map((item) => (
      <React.Fragment key={item.id}>
        <Ellipse
          className={`slider ${activeIndex === item.id && "slider-selected"}`}
          onClick={() => {
            updateActiveEllipse?.(item.id);
          }}
          key={item.id}
        />
      </React.Fragment>
    ))}
  </div>
);
