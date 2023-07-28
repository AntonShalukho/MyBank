import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router";

import { useIntl } from "react-intl";

import { isEmpty, isNil } from "ramda";

import { useDispatch } from "react-redux";

import { toggleSpinner } from "redux/actions/spinnerAction";

import { Button } from "../../uikit_v2/Button";

import {
  PRODUCTS_ACCOUNT_LIST_PATH,
  PRODUCTS_ACCOUNT_PRODUCTS_PATH,
} from "../../utils/variables";

import { CentralNavBlock } from "./CentralNavBlock";

import { MainPageRouteConfig } from "./MainPageRouteConfig";

import { DefaultProduct } from "../ProductsPage/DefaultProduct";

import {
  getListOfAccounts,
  ListOfAccountType,
} from "../../services/api/getListOfAccounts";

import { Scrollbar } from "../../uikit_v2/Scrollbar";

import styles from "./MainPage.module.css";

export const MainPage = () => {
  const navigate = useNavigate();
  const intl = useIntl();
  const [accounts, setAccounts] = useState<ListOfAccountType[] | null>(null);
  const dispatch = useDispatch();
  const handleClick = () => {
    navigate(PRODUCTS_ACCOUNT_PRODUCTS_PATH);
  };

  const handleProducts = () => {
    navigate(PRODUCTS_ACCOUNT_LIST_PATH);
  };

  useEffect(() => {
    dispatch(toggleSpinner(true));
    getListOfAccounts()
      .then((data) => {
        setAccounts(data);
      })
      .finally(() => dispatch(toggleSpinner(false)));
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.main_block}>
        {!isNil(accounts) && !isEmpty(accounts) && (
          <>
            <CentralNavBlock />
            <Scrollbar>
              <div className={styles.list}>
                <MainPageRouteConfig accounts={accounts} />
              </div>
            </Scrollbar>
            <div className={styles.link_wrap}>
              {
                //  eslint-disable-next-line
                <div className={styles.show_more} onClick={handleProducts}>
                  {intl.formatMessage({ id: "showMoreLowerCase" })}
                </div>
              }
              <Button
                variant="secondarySmall"
                className={styles.open_link}
                onClick={handleClick}
              >
                {intl.formatMessage({ id: "plusOpenAccount" })}
              </Button>
            </div>
          </>
        )}
        {isEmpty(accounts) && (
          <>
            <h2 className={styles.subheader}>
              {intl.formatMessage({ id: "myProducts" })}
            </h2>
            <DefaultProduct />
          </>
        )}
      </div>
    </div>
  );
};
