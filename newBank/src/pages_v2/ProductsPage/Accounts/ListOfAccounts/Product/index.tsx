import React, { useState, useRef } from "react";

import { useNavigate } from "react-router";

import { useClickOutside } from "utils/hooks/useClickOutside";

import { ProductInfo } from "../ProductInfo";

import { ProductValue } from "../ProductValue";

import { ListOfAccountType } from "../../../../../services/api/getListOfAccounts";

import { CopyIcon } from "../../../../../components_v2/Icon";

import { format } from "../ProductValue/formatIbanMask";

import { PRODUCTS_ACCOUNT_DETAILS_PATH } from "../../../../../utils/variables";

import styles from "./Product.module.css";

type ProductType = {
  account: ListOfAccountType;
};

export const Product = ({ account }: ProductType) => {
  const [activeField, setActiveField] = useState(false);
  const copyInfo = useRef<HTMLTextAreaElement>(null);
  const copyIconRef = useRef<SVGSVGElement>(null);
  const accountInfoDiv = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const onCopy = () => {
    setActiveField(true);
    setTimeout(() => {
      setActiveField(false);
    }, 2000);

    if (copyInfo.current) {
      copyInfo.current.value = copyInfo.current.value.replaceAll(" ", "");
      copyInfo.current.select();
      document.execCommand("copy");
      copyInfo.current.blur();
      copyInfo.current.value = format(copyInfo.current.value);
    }
  };

  const handleWrapClick = (event: React.MouseEvent) => {
    const { target } = event;
    if (target === copyInfo.current || target === copyIconRef.current) {
      onCopy();
    } else {
      navigate(PRODUCTS_ACCOUNT_DETAILS_PATH, { state: account.id });
    }
  };

  const handleActiveField = () => {
    setActiveField(false);
  };

  useClickOutside(accountInfoDiv, handleActiveField);

  return (
    // eslint-disable-next-line
    <div
      className={styles.current_data_block}
      onClick={handleWrapClick}
      ref={accountInfoDiv}
    >
      <ProductInfo account={account} />
      <ProductValue account={account} activeField={activeField}>
        <div className={styles.account_number_container}>
          <textarea
            className={styles.number}
            value={format(account.iban)}
            ref={copyInfo}
          />
          <CopyIcon className={styles.copy_icon} ref={copyIconRef} />
        </div>
      </ProductValue>
    </div>
  );
};
