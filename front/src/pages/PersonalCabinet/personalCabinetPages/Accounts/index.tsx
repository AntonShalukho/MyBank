import React, { useEffect } from "react";

import { useNavigate } from "react-router";

import { FormattedMessage } from "react-intl";

import { isEmpty } from "ramda";

import { AccountProduct } from "./AccountProduct";

import { MobileBar } from "./MobileBar";

import { getListOfAccounts } from "../../../../services/api/getListOfAccounts";

import styles from "./Accounts.module.css";

export const Accounts = () => {
  const navigate = useNavigate();

  useEffect(() => {
    getListOfAccounts().then((data) => {
      !isEmpty(data) && navigate("/cabinet/accounts/list-of-accounts");
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <FormattedMessage id="chooseTheAccount" />
        </h1>
        <AccountProduct />
      </div>
      <MobileBar />
    </div>
  );
};
