import React, { useState, useEffect, useMemo } from "react";

import { useLocation, useNavigate } from "react-router";

import { isEmpty } from "ramda";

import classNames from "classnames";

import {
  CURRENT,
  MAIN_PAGE_ACCOUNT_PATH,
  PRODUCTS_ACCOUNT_LIST_PATH,
  PRODUCTS_ACCOUNT_PATH,
  SAVING,
} from "src/shared/consts/accounts";

import { MAIN_PAGE_PATH } from "src/shared/consts/MainPage";

import { AccountsRequestType } from "src/shared/types/accounts";

import { useSpinner } from "src/shared/lib/hooks/useSpinner";

import { getFilteredProducts } from "./lib/getFilteredProducts";

import { getListOfAccounts } from "./api/getListOfAccounts";

import { ListOfProductsType } from "./types";

import { ProductsList } from "./components/ProductsList";

import styles from "./ListOfAccounts.module.scss";

export const ListOfAccounts = ({ accountsData }: ListOfProductsType) => {
  const [accounts, setAccounts] = useState<AccountsRequestType[]>(
    accountsData || []
  );
  const navigate = useNavigate();
  const { toggleSpinner } = useSpinner();
  const { pathname } = useLocation();

  const getSortedProducts = (type: string) =>
    accounts.filter(
      (account) => account.bankProductName.split(" ")[0] === type
    );

  const currentAccounts = useMemo(() => getSortedProducts(CURRENT), [accounts]);

  const savingAccounts = useMemo(() => getSortedProducts(SAVING), [accounts]);

  const handleMainPagePath = (): boolean => {
    const paths = [MAIN_PAGE_PATH, MAIN_PAGE_ACCOUNT_PATH];
    return !paths.includes(pathname);
  };

  useEffect(() => {
    toggleSpinner(true);
    !accountsData &&
      getListOfAccounts()
        .then((data) => {
          if (isEmpty(data)) navigate(PRODUCTS_ACCOUNT_PATH);
          setAccounts(data);
          toggleSpinner(false);
        })
        .catch((error) => {
          if (error.response.status === 400) {
            toggleSpinner(true);
          } else {
            toggleSpinner(false);
          }
        });
  }, []);

  return (
    <div
      className={classNames(styles.layout, {
        [styles.layout_prod_mobile]: pathname === PRODUCTS_ACCOUNT_LIST_PATH,
      })}
    >
      <div className={styles.wrapper}>
        <div
          className={classNames(styles.accounts, {
            [styles.main_page_accounts]: !handleMainPagePath(),
          })}
        >
          {!isEmpty(currentAccounts) && (
            <ProductsList accounts={getFilteredProducts(currentAccounts)} />
          )}
          {!isEmpty(savingAccounts) && (
            <ProductsList accounts={getFilteredProducts(savingAccounts)} />
          )}
          <div className={styles.empty_space} />
        </div>
      </div>
    </div>
  );
};
