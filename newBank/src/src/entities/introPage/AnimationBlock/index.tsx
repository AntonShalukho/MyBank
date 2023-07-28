import { AnimationBottom } from "./components/AnimationBottom";

import { AnimationTop } from "./components/AnimationTop";

import { VideoType } from "../types";

import styles from "./AnimationBlock.module.scss";

export const AnimationBlock = ({ video }: VideoType) => (
  <div className={styles.wrapper}>
    <AnimationTop video={video} />
    <AnimationBottom />
  </div>
);
