import React from "react";

import classNames from "classnames";

import { SpinnerType } from "../../types/Spinner";

import styles from "./Spinner.module.scss";

export const Spinner = ({ className }: SpinnerType) => (
  <div className={classNames(styles.spinner, className)} />
);
