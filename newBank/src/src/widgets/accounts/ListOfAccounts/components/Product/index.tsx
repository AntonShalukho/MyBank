import React, { useState, useRef } from "react";

import { useNavigate } from "react-router";

import { useClickOutside } from "src/shared/lib/hooks/useClickOutside";

import { PRODUCTS_ACCOUNT_DETAILS_PATH } from "src/shared/consts/accounts";

import { CopyIcon } from "src/shared/assets/icons/components/CopyIcon";

import { format } from "src/shared/lib/formatIbanMask";

import { getCopiedValue } from "src/shared/lib/getCopiedValue";

import { ProductInfo } from "../ProductInfo";

import { ProductValue } from "../ProductValue";

import { ProductType } from "../../types";

import styles from "./Product.module.scss";

export const Product = ({ account }: ProductType) => {
  const [activeField, setActiveField] = useState<boolean>(false);
  const copyInfo = useRef<HTMLTextAreaElement>(null);
  const copyIconRef = useRef<SVGSVGElement>(null);
  const accountInfoDiv = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const onCopy = () => {
    setActiveField(true);
    setTimeout(() => {
      setActiveField(false);
    }, 2000);

    copyInfo.current && getCopiedValue(copyInfo.current.value);
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
