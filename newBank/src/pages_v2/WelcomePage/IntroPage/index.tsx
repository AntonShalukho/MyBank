import React, { useEffect, useState } from "react";

import { Footer } from "../../../components_v2/Footer";

import { BlockFive } from "./BlockFive";

import { BlockThree } from "./BlockThree";

import { BlockFour } from "./BlockFour";

import { BlockSeven } from "./BlockSeven";

import { BlockEight } from "./BlockEight";

import { Header } from "../../../components_v2/Header";

import { AnimationBlock } from "./AnimationBlock";

import {
  getVideoLinks,
  GetVideoLinkType,
} from "../../../services/api/getVideoLinks";

import { BlockSix } from "./BlockSix";

import styles from "./IntroPage.module.css";

import { videoLinksMockData } from "./videoLinksMock";

export const IntroPage = () => {
  const [video, setVideo] = useState<GetVideoLinkType[]>([]);

  useEffect(() => {
    getVideoLinks()
      .then(setVideo)
      .catch(() => setVideo(videoLinksMockData));
  }, []);

  const AnimationBlockVideo = video[0]?.videoLink;
  const BlockSevenVideo = video[1]?.videoLink;
  const BlockEightVideo = video[2]?.videoLink;

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.first_block}>
          <AnimationBlock video={AnimationBlockVideo} />
        </div>
        <div className={styles.contentBlock}>
          <BlockThree />
          <BlockFour />
        </div>
        <div className={styles.contentBlock}>
          <BlockFive />
          <BlockSix />
        </div>
        <BlockSeven video={BlockSevenVideo} />
        <BlockEight video={BlockEightVideo} />
      </div>
      <Footer />
    </div>
  );
};
