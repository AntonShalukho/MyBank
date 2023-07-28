import React, { useRef, useState } from "react";

import { useClickOutside } from "src/shared/lib/hooks/useClickOutside";

import { CopyField } from "src/shared/ui/CopyField";

import { CopyIcon } from "src/shared/assets/icons/components/CopyIcon";

import { format } from "src/shared/lib/formatIbanMask";

import { getCopiedValue } from "src/shared/lib/getCopiedValue";

import { AccountInfoBlockType } from "../../types";

import styles from "./CurrentAccountInfo.module.scss";

export const CurrentAccountInfo: React.FC<AccountInfoBlockType> = ({
  account,
}) => {
  const copyInfo = useRef<HTMLTextAreaElement>(null);
  const accountInfoDiv = useRef<HTMLDivElement>(null);
  const [activeField, setActiveField] = useState(false);

  const onCopy = () => {
    setActiveField(true);
    setTimeout(() => {
      setActiveField(false);
    }, 2000);

    copyInfo.current && getCopiedValue(copyInfo.current.value);
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
