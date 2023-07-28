import React from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { useIntl } from "react-intl";

import classNames from "classnames";

import { SubHeader } from "../../uikit_v2/SubHeader";

import { ProductsConfig } from "./ProductsConfig";

import { Button } from "../../uikit_v2/Button";

import {
  PRODUCTS_ACCOUNT_LIST_PATH,
  PRODUCTS_ACCOUNT_PRODUCTS_PATH,
} from "../../utils/variables";

import { Scrollbar } from "../../uikit_v2/Scrollbar";

import styles from "./ProductPage.module.css";

export const ProductsPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const intl = useIntl();

  const isListOfAccounts = () => {
    const paths = [PRODUCTS_ACCOUNT_LIST_PATH];
    return paths.includes(pathname);
  };

  const handleClick = () => {
    navigate(PRODUCTS_ACCOUNT_PRODUCTS_PATH);
  };
  return (
    <>
      <SubHeader />
      <div
        className={classNames(styles.products_wrap, {
          [styles.list_background]: isListOfAccounts(),
        })}
      >
        <div className={styles.products}>
          <Scrollbar>
            <ProductsConfig pathname={pathname} />
          </Scrollbar>
        </div>
        {isListOfAccounts() && (
          <div className={styles.link_wrap}>
            <Button
              variant="secondarySmall"
              className={styles.open_link}
              onClick={handleClick}
            >
              {intl.formatMessage({ id: "plusOpenAccount" })}
            </Button>
          </div>
        )}
      </div>
    </>
  );
};
