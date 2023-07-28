import { useState, useEffect } from "react";

import { useLocation, useNavigate } from "react-router";

import { isEmpty } from "ramda";

import classNames from "classnames";

import { useAccountsListHandler } from "utils/hooks/useAccountsListHandler";

import {
  getListOfAccounts,
  ListOfAccountType,
} from "../../../../services/api/getListOfAccounts";

import { ListOfAccountTypeBlock } from "./ListOfAccountTypeBlock";

import { CURRENT, SAVING } from "./constants";

import { getFilteredProducts } from "./utils/getFilteredProducts";

import {
  MAIN_PAGE_PATH,
  MAIN_PAGE_ACCOUNT_PATH,
  PRODUCTS_ACCOUNT_LIST_PATH,
  PRODUCTS_ACCOUNT_PRODUCTS_PATH,
} from "../../../../utils/variables";

import styles from "./ListOfAccounts.module.css";

type AccountsListType = {
  accountsData?: ListOfAccountType[];
};

export const ListOfAccounts = ({ accountsData }: AccountsListType) => {
  const [accounts, setAccounts] = useState<ListOfAccountType[]>(
    accountsData || []
  );
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { setIsEmptyList } = useAccountsListHandler();

  const currentAccounts = accounts.filter(
    (account) => account.bankProductName.split(" ")[0] === CURRENT
  );
  const savingAccounts = accounts.filter(
    (account) => account.bankProductName.split(" ")[0] === SAVING
  );

  const handleMainPagePath = (): boolean => {
    const paths = [MAIN_PAGE_PATH, MAIN_PAGE_ACCOUNT_PATH];
    return !paths.includes(pathname);
  };

  const setAccountsByProps = () => {
    if (isEmpty(accountsData)) {
      setIsEmptyList(true);
    } else {
      setIsEmptyList(false);
    }
  };

  useEffect(() => {
    !accountsData &&
      getListOfAccounts().then((data) => {
        if (isEmpty(data)) {
          setIsEmptyList(true);
          navigate(PRODUCTS_ACCOUNT_PRODUCTS_PATH);
        } else {
          setIsEmptyList(false);
          setAccounts(() => data);
        }
      });
    accountsData && setAccountsByProps();
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
            <ListOfAccountTypeBlock
              accounts={getFilteredProducts(currentAccounts)}
            />
          )}
          {!isEmpty(savingAccounts) && (
            <ListOfAccountTypeBlock
              accounts={getFilteredProducts(savingAccounts)}
            />
          )}
          <div className={styles.empty_space} />
        </div>
      </div>
    </div>
  );
};
