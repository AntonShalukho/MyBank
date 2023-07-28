import React from "react";

import { NavigationBlock } from "./NavigationBlock";

import { SubHeader } from "../../../uikit_v2/SubHeader";

import styles from "./CentralNavBlock.module.css";

export const CentralNavBlock = () => (
  <div className={styles.wrapper}>
    <SubHeader />
    <NavigationBlock />
  </div>
);
