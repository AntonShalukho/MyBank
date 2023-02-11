import React, { useEffect, useRef, useState } from "react";

import { useIntl } from "react-intl";

import { Link } from "react-router-dom";

import { ListOfAccountType } from "../../../../../../services/api/getListOfAccounts";

import { ArrowRightGreen, CopyIcon } from "../../../../../../components/Icons";

import { format } from "./formatIbanMask";

import { CopyField } from "../../../../../../components/CopyField";

import { useClickOutside } from "../../../../../../utils/useClickOutside";

import styles from "./ProductValue.module.css";

type ProductValueType = {
  account: ListOfAccountType;
};

export const ProductValue: React.FC<ProductValueType> = ({ account }) => {
  const intl = useIntl();
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
      <div className={styles.current_account_link}>
        <Link
          className={styles.account_link}
          to="/cabinet/accounts/details-account"
          state={account.id}
        >
          {intl.formatMessage({ id: "listOfAccountMoreInfo" })}
        </Link>
        <div className={styles.current_account_arrow}>
          <ArrowRightGreen />
        </div>
      </div>
    </div>
  );
};
