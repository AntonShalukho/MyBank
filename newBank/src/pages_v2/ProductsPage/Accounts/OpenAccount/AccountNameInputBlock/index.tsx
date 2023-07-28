import React, { ChangeEvent, useRef, useState } from "react";

import classNames from "classnames";

import { Field, useField } from "formik";

import { useIntl } from "react-intl";

import { ClearInputIcon } from "../../../../../components_v2/Icon";

import { useClickOutside } from "../../../../../utils/hooks/useClickOutside";

import styles from "./AccountNameInputBlock.module.css";

type AccountNameInputBlockType = {
  accountName: string;
  className?: string;
};

export const AccountNameInputBlock: React.FC<AccountNameInputBlockType> = ({
  accountName,
  className,
}) => {
  const [field, meta, helpers] = useField(accountName);
  const intl = useIntl();
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length < 101 && !/\s/.test(value[0])) {
      helpers.setValue(value);
    }
  };

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  const handleCrossClick = () => {
    helpers.setValue("");
    inputRef.current?.focus();
  };

  useClickOutside(wrapperRef, handleBlur);

  const onTitleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className={styles.account_name}>
      <div className={styles.account_name_wrapper}>
        {/* eslint-disable-next-line */}
        <div className={styles.account_name__title} onClick={onTitleClick}>
          {intl.formatMessage({ id: "accountName" })}
        </div>
        <div className={styles.account_name__input_wrapper} ref={wrapperRef}>
          <Field
            name={accountName}
            placeholder={intl.formatMessage({
              id: "accountFormPlaceholder",
            })}
            className={styles.account_name__input}
            onChange={handleChange}
            value={meta.value}
            innerRef={inputRef}
            onFocus={handleFocus}
          />
          {isFocus && meta.value.length > 0 && (
            <ClearInputIcon
              className={styles.account_name__clear}
              onClick={handleCrossClick}
            />
          )}
        </div>
      </div>
      <div
        className={classNames(styles.account_name_counter, {
          [styles.account_name_counter_hidden]: !isFocus,
        })}
      >
        {intl.formatMessage({ id: "chatBotcharacterLeft" })}
        {"\n"}
        {100 - meta.value.length}/100
      </div>
    </div>
  );
};
