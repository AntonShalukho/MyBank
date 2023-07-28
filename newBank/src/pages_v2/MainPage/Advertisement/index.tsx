import React, { useEffect, useRef, useState } from "react";

import { isEmpty, length, product } from "ramda";

import classNames from "classnames";

import { SliderEllipsesAdv } from "./SliderEllipsesAdv";

import { Button } from "../../../uikit_v2/Button";

import { ArrowRightBlue } from "../../../components_v2/Icon";

import { useInterval } from "../../../utils/hooks/useInterval";

import {
  AdvertisementProductsType,
  getAdvertisementProducts,
} from "../../../services/api/getAdvertisementProducts";

import {
  getPictureIcon,
  getPictureLink,
  getPictureStyle,
  getTextDescriptionStyles,
  getTextTitleStyles,
} from "./constants";

import styles from "./Advertisement.module.css";

type AdvProps = {
  variant?: string;
  setIsLoading?: (value: boolean) => void;
};

export const Advertisement = ({ variant, setIsLoading }: AdvProps) => {
  const [advertisement, setAdvertisement] = useState<
    AdvertisementProductsType[]
  >([]);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isIntervalSlider, setIsIntervalSlider] = useState<boolean>(true);
  const advCounter = useRef<number>(0);
  const updateActiveEllipse = (nextActiveSlide: number) => {
    setActiveSlide(nextActiveSlide);
  };

  const handleSliderInterval = () => {
    setIsIntervalSlider(!isIntervalSlider);
  };

  useEffect(() => {
    getAdvertisementProducts()
      .then((data) => {
        setAdvertisement(data);
        advCounter.current = length(data) - 1;
      })
      .catch((err) => err)
      .finally(() => setIsLoading && setIsLoading(false));
  }, []);

  useInterval(
    isIntervalSlider,
    activeSlide,
    advCounter.current,
    updateActiveEllipse,
    3000
  );

  const handleAdvertisementClick = (product: AdvertisementProductsType) => {
    product.actionLink && window.location.assign(product.actionLink);
  };

  return length(advertisement) ? (
    <div className={styles.wrapper}>
      {
        // eslint-disable-next-line
        <div 
          className={classNames(styles.slider_component_wrapper, {
            [styles.loginSliderWrapper]: variant,
          })}
          onMouseDown={handleSliderInterval}
          onMouseUp={handleSliderInterval}
        >
          <div className={styles.slider_carousel}>
            <div
              className={classNames(styles.slider_carousel_item, {
                [styles.loginCarouselItem]: variant,
              })}
            >
              {!isEmpty(getPictureLink(advertisement[activeSlide])) && (
                <img
                  src={getPictureLink(advertisement[activeSlide])}
                  alt="background.img"
                  className={classNames(styles.slider_img, {
                    [styles.loginSliderImg]: variant,
                  })}
                />
              )}
              {isEmpty(getPictureLink(advertisement[activeSlide])) && (
                <div
                  className={classNames(styles.slider_img, {
                    [styles.loginSliderImg]: variant,
                  })}
                  style={{
                    background: getPictureStyle(advertisement[activeSlide]),
                  }}
                />
              )}
            </div>
            <div
              className={classNames(styles.adv_content, {
                [styles.loginContent]: variant,
              })}
            >
              {!isEmpty(getPictureIcon(advertisement[activeSlide])) && (
                // eslint-disable-next-line
                <img
                  src={getPictureIcon(advertisement[activeSlide])}
                  alt="icon.svg"
                  className={styles.slider_icon}
                  onClick={() =>
                    handleAdvertisementClick(advertisement[activeSlide])
                  }
                />
              )}
              {
                // eslint-disable-next-line
              <div
                  className={classNames(
                    getTextTitleStyles(advertisement[activeSlide].position),
                    {
                      [styles.loginText]: variant,
                    }
                  )}
                  onClick={() =>
                    handleAdvertisementClick(advertisement[activeSlide])
                  }
                >
                  {advertisement[activeSlide].heading}
                </div>
              }
              {
                // eslint-disable-next-line
              <div
                  className={classNames(
                    getTextDescriptionStyles(
                      advertisement[activeSlide].position
                    ),
                    {
                      [styles.loginDescription]: variant,
                    }
                  )}
                  onClick={() =>
                    handleAdvertisementClick(advertisement[activeSlide])
                  }
                >
                  {advertisement[activeSlide].description}
                </div>
              }
            </div>
            {advertisement[activeSlide].button && (
              <Button
                variant="advertisement"
                type="submit"
                onClick={() =>
                  handleAdvertisementClick(advertisement[activeSlide])
                }
                className={classNames(styles.adv_button, {
                  [styles.loginAdvButton]: variant,
                })}
              >
                <div className={styles.btn_title}>
                  {advertisement[activeSlide].button?.title}
                  <ArrowRightBlue className={styles.arrow_right_blue} />
                </div>
              </Button>
            )}
          </div>
          {length(advertisement) > 1 && (
            <SliderEllipsesAdv
              activeSlide={activeSlide}
              advertisementDate={advertisement}
              updateActiveEllipse={updateActiveEllipse}
              variant={variant}
            />
          )}
        </div>
      }
    </div>
  ) : (
    <></>
  );
};
