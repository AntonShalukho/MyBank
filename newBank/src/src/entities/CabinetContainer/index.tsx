import React from "react";

import { Outlet } from "react-router";

import { Header } from "src/widgets/Header";

import styles from "./CabinetContainer.module.scss";

export const CabinetContainer = () => (
  <div className={styles.wrapper}>
    <Header />
    <Outlet />
  </div>
);
