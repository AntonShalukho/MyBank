import { useEffect, useRef, useState } from "react";

import classNames from "classnames";

import Euro from "src/shared/assets/icons/static/euro-dynamic-color.png";

import Card from "src/shared/assets/icons/static/card-dynamic-color.png";

import { Browser, GroupOfCircles } from "src/shared/assets/icons";

import { VideoType } from "src/entities/introPage/types";

import { InfoBlock } from "../InfoBlock";

import { AdditionalIconBlock } from "../AdditionalIconBlock";

import { getPercentMap } from "../../lib/scrollUtil";

import styles from "./AnimationTop.module.scss";

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
      videoWidth.current = 100 - video.width * (window.scrollY / scrollPercent);
      browserWidth.current =
        100 + browser.width * (window.scrollY / scrollPercent);

      videoHeight.current =
        100 - video.height * (window.scrollY / scrollPercent);
      browserHeight.current =
        100 + browser.height * (window.scrollY / scrollPercent);

      videoBorderRadius.current =
        52 - video.borderRadius * (window.scrollY / scrollPercent);
      browserBorderRadius.current =
        50 - browser.borderRadius * (window.scrollY / scrollPercent);

      setVideoTop(0 + video.top * (window.scrollY / scrollPercent));
      browserTop.current = 0 + browser.top * (window.scrollY / scrollPercent);

      videoRight.current = 0 + video.right * (window.scrollY / scrollPercent);
      browserRight.current =
        0 - browser.right * (window.scrollY / scrollPercent);
    }
    if (window.scrollY > scrollStop) {
      setVideoTop(videoConst.top);
      videoRight.current = videoConst.right;

      videoWidth.current = videoConst.width;
      videoHeight.current = videoConst.height;

      browserWidth.current = browserConst.width;
      browserHeight.current = browserConst.height;

      browserTop.current = browserConst.top;
      browserRight.current = browserConst.right;
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
      <div
        className={classNames(styles.description, styles.description_mobile)}
        role="top"
      >
        <div className={styles.info}>
          <InfoBlock
            title="entities_introPageAnimTopTitle"
            titleDesc="entities_introPageAnimTopTitleDesc"
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

      <div className={styles.description} role="bottom">
        <AdditionalIconBlock description="entities_introAdditionalIconFirst">
          <img src={Euro} alt="euro" />
        </AdditionalIconBlock>
        <AdditionalIconBlock description="entities_introAdditionalIconSecond">
          <img src={Card} alt="card" />
        </AdditionalIconBlock>
      </div>
    </div>
  );
};
