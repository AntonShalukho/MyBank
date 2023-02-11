import React from "react";

import classNames from "classnames";

import { Field, useField } from "formik";

import { useIntl } from "react-intl";

import { ClearInputIcon } from "../../../../../../components/Icons";

import { useClickOutside } from "../../../../../../utils/useClickOutside";

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
  const [isFocus, setIsFocus] = React.useState<boolean>(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  return (
    <div className={styles.account_name}>
      <div className={styles.account_name_wrapper}>
        <div className={styles.account_name__title}>
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
