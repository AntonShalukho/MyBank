import { useEffect, useState } from "react";

import { Header } from "src/widgets/Header";

import {
  AnimationBlock,
  BlockThree,
  BlockFour,
  BlockFive,
  BlockSix,
  BlockSeven,
  BlockEight,
  Footer,
} from "src/entities/introPage";

import { getVideoLinks, GetVideoLinkType } from "./api/getVideoLinks";

import styles from "./IntroPage.module.scss";

import { videoLinksMockData } from "./lib/videoLinksMock";

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
