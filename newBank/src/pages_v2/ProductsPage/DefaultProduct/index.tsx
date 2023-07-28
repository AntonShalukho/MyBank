import React from "react";

import { Link } from "react-router-dom";

import { useIntl } from "react-intl";

import { PRODUCTS_PATH } from "../../../utils/variables";

import { HiBoyIcon } from "../../../components_v2/Icon";

import styles from "./DefaultProduct.module.css";

export const DefaultProduct = () => {
  const intl = useIntl();
  return (
    <div className={styles.container}>
      <HiBoyIcon className={styles.icon} />
      <p className={styles.description}>
        {intl.formatMessage({ id: "noProductMessage" })}
      </p>
      <Link className={styles.button} to={PRODUCTS_PATH}>
        {intl.formatMessage({ id: "plusOpenProd" })}
      </Link>
    </div>
  );
};
