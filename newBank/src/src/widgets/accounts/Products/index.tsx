import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { useIntl } from "react-intl";

import { Button } from "src/shared/ui/Button";

import { getAccountNavigateLink } from "src/shared/lib/getAccountNavigateLink";

import { CreditCardIcon } from "src/shared/assets/icons/components/CreditCardIcon";

import { ProductResponseType } from "./types";

import { getAccountProducts } from "./api/getAccountProducts";

import styles from "./Product.module.scss";

export const Products = () => {
  const [accountProducts, setAccountProducts] = useState<ProductResponseType[]>(
    []
  );
  const navigate = useNavigate();
  const intl = useIntl();

  useEffect(() => {
    getAccountProducts().then((data) => setAccountProducts(data));
  }, []);

  const handleOpenAccountClick = (name: string) =>
    navigate(getAccountNavigateLink(name));

  return (
    <>
      {accountProducts && (
        <ul className={styles.container}>
          {accountProducts.map((item) => (
            <li key={item.name} className={styles.card}>
              <div>
                <CreditCardIcon className={styles.icon} />
                <h1 className={styles.title}>{item.name.slice(0, 30)}</h1>
                <p className={styles.description}>
                  {item.description.slice(0, 200)}
                </p>
              </div>
              <Button
                variant="primarySmall"
                className={styles.button}
                onClick={() => handleOpenAccountClick(item.name)}
              >
                {intl.formatMessage({ id: "widget_openAccount" })}
              </Button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
