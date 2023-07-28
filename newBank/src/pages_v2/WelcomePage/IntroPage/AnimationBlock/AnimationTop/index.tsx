import React, { useEffect, useRef, useState } from "react";

import classNames from "classnames";

import { AdditionalIconBlock } from "../AdditionalIconBlock";

import Euro from "../../../../../uikit_v2/static/euro-dynamic-color.png";

import Card from "../../../../../uikit_v2/static/card-dynamic-color.png";

import { InfoBlock } from "../InfoBlock";

import { Browser, GroupOfCircles } from "../../../../../components_v2/Icon";

import { getPercentMap } from "./scrollUtil";

import styles from "./AnimationTop.module.css";

export type VideoType = {
  video?: string;
};

export const AnimationTop = ({ video }: VideoType) => {
  const videoWidth = useRef<number>(100);
  const videoHeight = useRef<number>(100);
  const videoRight = useRef<number>(0);
  const videoBorderRadius = useRef<number>(52);
  const [videoTop, setVideoTop] = useState<number>(0);

  const browserWidth = useRef<number>(100);
  const browserHeight = useRef<number>(100);
  const browserTop = useRef<number>(0);
  const browserRight = useRef<number>(0);
  const browserBorderRadius = useRef<number>(50);

  const handleScroll = () => {
    const {
      video,
      videoConst,
      browser,
      browserConst,
      scrollStop,
      scrollPercent,
    } = getPercentMap();
    if (window.scrollY === 0 || window.scrollY <= scrollStop) {
      videoWidth.current = 100 - video.Width * (window.scrollY / scrollPercent);
      browserWidth.current =
        100 + browser.Width * (window.scrollY / scrollPercent);

      videoHeight.current =
        100 - video.Height * (window.scrollY / scrollPercent);
      browserHeight.current =
        100 + browser.Height * (window.scrollY / scrollPercent);

      videoBorderRadius.current =
        52 - video.BorderRadius * (window.scrollY / scrollPercent);
      browserBorderRadius.current =
        50 - browser.BorderRadius * (window.scrollY / scrollPercent);

      setVideoTop(0 + video.Top * (window.scrollY / scrollPercent));
      browserTop.current = 0 + browser.Top * (window.scrollY / scrollPercent);

      videoRight.current = 0 + video.Right * (window.scrollY / scrollPercent);
      browserRight.current =
        0 - browser.Right * (window.scrollY / scrollPercent);
    }
    if (window.scrollY > scrollStop) {
      setVideoTop(videoConst.Top);
      videoRight.current = videoConst.Right;

      videoWidth.current = videoConst.Width;
      videoHeight.current = videoConst.Height;

      browserWidth.current = browserConst.Width;
      browserHeight.current = browserConst.Height;

      browserTop.current = browserConst.Top;
      browserRight.current = browserConst.Right;
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      {
        // eslint-disable-next-line
        <div className={classNames(styles.description, styles.description_mobile)} role="top">
          <div className={styles.info}>
            <InfoBlock
              title="introPageAnimTopTitle"
              titleDesc="introPageAnimTopTitleDesc"
              buttonDesc="signUp"
              titleFontSize={true}
            />
          </div>
          <div className={styles.icon}>
            <GroupOfCircles />
          </div>
          <div className={styles.animation_container}>
            <Browser
              className={styles.browser}
              style={{
                top: `${browserTop.current}%`,
                right: `${browserRight.current}%`,
                width: `${browserWidth.current}%`,
                height: `${browserHeight.current}%`,
                borderRadius: `${browserBorderRadius.current}%`,
              }}
            />
            <video
              className={styles.video}
              style={{
                top: `${videoTop}%`,
                right: `${videoRight.current}%`,
                width: `${videoWidth.current}%`,
                height: `${videoHeight.current}%`,
                borderRadius: `${videoBorderRadius.current}%`,
              }}
              autoPlay={true}
              loop={true}
              src={video}
              muted={true}
            >
              <source src={video} type="video" width="500px" height="500px" />
              <track src="" kind="captions" />
            </video>
          </div>
          <video
            className={styles.video_mobile}
            autoPlay={true}
            loop={true}
            src={video}
            muted={true}
          >
            <source src={video} type="video" width="500px" height="500px" />
            <track src="" kind="captions" />
          </video>
        </div>
      }
      {
        // eslint-disable-next-line
        <div className={styles.description} role="bottom">
          <AdditionalIconBlock description="introAdditionalIconFirst">
            <img src={Euro} alt="euro" />
          </AdditionalIconBlock>
          <AdditionalIconBlock description="introAdditionalIconSecond">
            <img src={Card} alt="card" />
          </AdditionalIconBlock>
        </div>
      }
    </div>
  );
};
