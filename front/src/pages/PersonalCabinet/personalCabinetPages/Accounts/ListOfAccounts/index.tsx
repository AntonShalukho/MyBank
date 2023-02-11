import { FormattedMessage } from "react-intl";

import { useNavigate } from "react-router";

import { useDispatch } from "react-redux";

import React, { useState, useEffect } from "react";

import { Button } from "../../../../../uikit/Button";

import {
  getListOfAccounts,
  ListOfAccountType,
} from "../../../../../services/api/getListOfAccounts";

import { ListOfAccountTypeBlock } from "./ListOfAccountTypeBlock";

import { CURRENT, SAVING } from "./constants";

import { setAccountProductName } from "../../../../../redux/actions/accountProductsActions";

import { getFilteredProducts } from "./utils/getFilteredProducts";

import styles from "./ListOfAccounts.module.css";

export const ListOfAccounts = () => {
  const [accounts, setAccounts] = useState<ListOfAccountType[]>([]);
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentAccounts = accounts.filter(
    (account) => account.bankProductName.split(" ")[0] === CURRENT
  );
  const savingAccounts = accounts.filter(
    (account) => account.bankProductName.split(" ")[0] === SAVING
  );

  useEffect(() => {
    getListOfAccounts().then((data) => {
      setAccounts(data);
    });
  }, []);

  const toggleDropdown = () => setIsDropdown(!isDropdown);

  const handleDropdown = (productName: string) => {
    dispatch(setAccountProductName(productName));
    navigate(`/cabinet/accounts/open-accounts-${productName}`);
    toggleDropdown();
  };

  return (
    <>
      <div className={styles.layout}>
        <div className={styles.title_block}>
          <div className={styles.title_name}>
            <FormattedMessage id="ListOfAccounts" />
          </div>
          <div className={styles.dropdown}>
            <Button
              variant="openAccountPlus"
              className={styles.dropdown_button}
              onClick={toggleDropdown}
            >
              <FormattedMessage id="openAccountPlus" />
            </Button>
            {isDropdown && (
              <div className={styles.dropdown_options}>
                <Button
                  className={styles.dropdown_link}
                  onClick={() => handleDropdown(CURRENT)}
                >
                  <FormattedMessage id="listOfAccountDropDownCurrent" />
                </Button>
                <Button
                  className={styles.dropdown_link}
                  onClick={() => handleDropdown(SAVING)}
                >
                  <FormattedMessage id="listOfAccountDropDownSaving" />
                </Button>
              </div>
            )}
          </div>
        </div>
        {currentAccounts.length !== 0 && (
          <ListOfAccountTypeBlock
            title="openAccountCurrentTitle"
            accounts={getFilteredProducts(currentAccounts)}
          />
        )}
        {savingAccounts.length !== 0 && (
          <ListOfAccountTypeBlock
            title="openAccountSavingTitle"
            accounts={getFilteredProducts(savingAccounts)}
          />
        )}
      </div>
    </>
  );
};
