import React from "react";

import classNames from "classnames";

import styles from "./Spinner.module.css";

export const Spinner = ({ className }: { className?: string }) => (
  <div className={classNames(styles.spinner, className)} />
);
