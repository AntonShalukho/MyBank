import { blockFourData } from "./lib/BlockFourData";

import { BlockTitle } from "./components/BlockTitle";

import { BlockDescription } from "./components/BlockDescription";

import styles from "./BlockFour.module.scss";

export const BlockFour = () => (
  <ul className={styles.list}>
    {blockFourData.map(({ title, description }) => (
      <li className={styles.item} key={title}>
        <BlockTitle title={title} />
        <BlockDescription description={description} />
      </li>
    ))}
  </ul>
);
