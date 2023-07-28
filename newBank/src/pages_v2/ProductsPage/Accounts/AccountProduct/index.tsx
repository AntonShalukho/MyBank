import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { useIntl } from "react-intl";

import { CreditCardIcon } from "../../../../components_v2/Icon";

import {
  getAccountProducts,
  ProductType,
} from "../../../../services/api/getAccountProducts";

import { Button } from "../../../../uikit/Button";

import styles from "./AccountProduct.module.css";

export const AccountProduct = () => {
  const [accountProducts, setAccountProducts] = useState<ProductType[]>([]);
  const navigate = useNavigate();
  const intl = useIntl();

  useEffect(() => {
    getAccountProducts().then((data) => setAccountProducts(data));
  }, []);

  const handleOpenAccountClick = (name: string) => {
    navigate(`/products/accounts/open-accounts-${name}`);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.outside_container}>
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
                  className={styles.button}
                  onClick={() => handleOpenAccountClick(item.name)}
                >
                  {intl.formatMessage({ id: "openAccountButton" })}
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
