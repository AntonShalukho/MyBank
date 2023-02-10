import React, { useState } from "react";

import { AccountDetailsType } from "../../../../../../services/api/getAccountDetails";

import { useClickOutside } from "../../../../../../utils/useClickOutside";

import { CopyField } from "../../../../../../components/CopyField";

import { CopyIcon } from "../../../../../../components/Icons";

import { format } from "../../ListOfAccounts/ProductValue/formatIbanMask";

import styles from "../../ListOfAccounts/ProductValue/ProductValue.module.css";

type ProductValueType = {
  account: AccountDetailsType;
};

export const CurrentAccountInfo: React.FC<ProductValueType> = ({ account }) => {
  const copyInfo = React.useRef<HTMLTextAreaElement>(null);
  const accountInfoDiv = React.useRef<HTMLDivElement>(null);
  const [activeField, setActiveField] = useState(false);

  const onCopy = (event: React.MouseEvent) => {
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
    <div className={styles.current_account_block}>
      {/* eslint-disable-next-line */}
      <div  
        className={styles.current_account_info}
        onClick={onCopy}
        ref={accountInfoDiv}
      >
        <textarea
          value={format(account.iban)}
          className={styles.current_account_number}
          ref={copyInfo}
        />
        <div className={styles.current_copy_logo}>
          <CopyIcon />
        </div>
        {activeField && (
          <div className={styles.copy_field_active}>
            <CopyField />
          </div>
        )}
      </div>
    </div>
  );
};
