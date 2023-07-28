import React from "react";

import { AnimationBottom } from "./AnimationBottom";

import { VideoType, AnimationTop } from "./AnimationTop";

import styles from "./AnimationBlock.module.css";

export const AnimationBlock = ({ video }: VideoType) => (
  <div className={styles.wrapper}>
    <AnimationTop video={video} />
    <AnimationBottom />
  </div>
);
