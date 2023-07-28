import React from "react";

import { blockFourData } from "./BlockFourData";

import { BlockTitle } from "./BlockTitle";

import { BlockDescription } from "./BlockDescription";

import styles from "./BlockFour.module.css";

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
