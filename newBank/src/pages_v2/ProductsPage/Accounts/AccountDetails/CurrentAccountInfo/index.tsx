import React, { useRef, useState, MouseEvent } from "react";

import { AccountDetailsType } from "../../../../../services/api/getAccountDetails";

import { useClickOutside } from "../../../../../utils/hooks/useClickOutside";

import { CopyField } from "../../../../../components_v2/CopyField";

import { CopyIcon } from "../../../../../components_v2/Icon";

import { format } from "../../ListOfAccounts/ProductValue/formatIbanMask";

import styles from "./CurrentAccountInfo.module.css";

type ProductValueType = {
  account: AccountDetailsType;
};

export const CurrentAccountInfo: React.FC<ProductValueType> = ({ account }) => {
  const copyInfo = useRef<HTMLTextAreaElement>(null);
  const accountInfoDiv = useRef<HTMLDivElement>(null);
  const [activeField, setActiveField] = useState(false);

  const onCopy = (event: MouseEvent) => {
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

  const handleActiveField = () => {
    setActiveField(false);
  };

  useClickOutside(accountInfoDiv, handleActiveField);

  return (
    <div className={styles.container}>
      <div className={styles.account_info}>
        <div className={styles.title}>{account.bankProductName}</div>
        {/* eslint-disable-next-line */}
        <div
          className={styles.account_number_container}
          onClick={onCopy}
          ref={accountInfoDiv}
        >
          <textarea
            className={styles.number}
            value={format(account.iban)}
            ref={copyInfo}
          />
          <CopyIcon className={styles.copy_icon} />
        </div>
      </div>
      {activeField && (
        <div className={styles.copied_message}>
          <CopyField />
        </div>
      )}
    </div>
  );
};
