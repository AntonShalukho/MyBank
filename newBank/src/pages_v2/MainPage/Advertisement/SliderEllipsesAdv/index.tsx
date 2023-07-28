import React from "react";

import classNames from "classnames";

import { length } from "ramda";

import { KeyBoardArrowDown } from "../../../../components_v2/Icon";

import { AdvertisementProductsType } from "../../../../services/api/getAdvertisementProducts";

import styles from "./SliderEllipsesAdv.module.css";

type SliderCardProps = {
  updateActiveEllipse?: (activeIndex: number) => void;
  advertisementDate: AdvertisementProductsType[];
  activeSlide: number;
  variant?: string;
};

export const SliderEllipsesAdv = ({
  updateActiveEllipse,
  advertisementDate,
  activeSlide,
  variant,
}: SliderCardProps) => {
  const handleRightArrow = () => {
    if (updateActiveEllipse && activeSlide !== 0) {
      updateActiveEllipse(activeSlide - 1);
    } else if (updateActiveEllipse) {
      updateActiveEllipse(length(advertisementDate) - 1);
    }
  };

  const handleLeftArrow = () => {
    if (updateActiveEllipse && activeSlide < length(advertisementDate) - 1) {
      updateActiveEllipse(activeSlide + 1);
    } else if (updateActiveEllipse) {
      updateActiveEllipse(0);
    }
  };

  return (
    <div
      className={classNames(styles.slider_wrapper, {
        [styles.loginSliderWrapper]: variant,
      })}
    >
      {
        // eslint-disable-next-line
        <div 
          className={styles.arrow_right}
          onClick={handleRightArrow}
        >
          <KeyBoardArrowDown />
        </div>
      }
      <div className={styles.slider_container}>
        {advertisementDate.map((item, index) => {
          if (index < 5) {
            return (
              //  eslint-disable-next-line
                <div
                className={classNames(styles.slider, {
                  [styles.slider_selected]:
                    activeSlide === index ||
                    (activeSlide > index && index === 4),
                })}
                onClick={() => {
                  updateActiveEllipse && updateActiveEllipse(index);
                }}
                key={item.id}
              ></div>
            );
          }
          return null;
        })}
      </div>
      {
        // eslint-disable-next-line
        <div 
          className={styles.arrow_left}
          onClick={handleLeftArrow}
        >
          <KeyBoardArrowDown />
        </div>
      }
    </div>
  );
};
