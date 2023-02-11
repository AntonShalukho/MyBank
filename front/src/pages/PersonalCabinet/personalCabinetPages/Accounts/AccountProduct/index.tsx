import React, { useEffect, useState } from "react";

import { FormattedMessage } from "react-intl";

import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import { setAccountProductName } from "../../../../../redux/actions/accountProductsActions";

import {
  getAccountProducts,
  ProductType,
} from "../../../../../services/api/getAccountProducts";

import { Button } from "../../../../../uikit/Button";

import { CURRENT } from "../ListOfAccounts/constants";

import styles from "./AccountProduct.module.css";

export const AccountProduct = () => {
  const [accountProducts, setAccountProducts] = useState<ProductType[]>([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getAccountProducts().then((data) => setAccountProducts(data));
  }, []);

  const handleOpenAccountClick = (name: string) => {
    dispatch(setAccountProductName(name));
    navigate(`open-accounts-${name}`);
  };

  return (
    <>
      {accountProducts && (
        <ul className={styles.container}>
          {accountProducts.map((item) => (
            <li
              key={item.name}
              className={item.name === CURRENT ? styles.current : styles.saving}
            >
              <h1 className={styles.title}>{item.name.slice(0, 30)}</h1>
              <p className={styles.description}>
                {item.description.slice(0, 200)}
              </p>
              <Button
                className={styles.link}
                onClick={() => handleOpenAccountClick(item.name)}
              >
                <FormattedMessage id="openAccountButton" />
              </Button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
