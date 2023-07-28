import React from "react";

import { Outlet } from "react-router";

import { Header } from "../../components_v2/Header";

import styles from "./CabinetPage.module.css";

export const CabinetPage = () => (
  <div className={styles.wrapper}>
    <Header />
    <Outlet />
  </div>
);
