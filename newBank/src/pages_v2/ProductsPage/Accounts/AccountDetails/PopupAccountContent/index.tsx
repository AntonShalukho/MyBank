import React from "react";

import { FormattedMessage, useIntl } from "react-intl";

import { Input } from "uikit_v2/Input";

import { length } from "ramda";

import { Button } from "../../../../../uikit_v2/Button";

import styles from "./PopupAccountContent.module.css";

type ModalContentType = {
  closeModal(): void;
  accountName: string;
};

export const PopupAccountContent: React.FC<ModalContentType> = ({
  closeModal,
  accountName,
}) => {
  const intl = useIntl();
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.title}>
          <FormattedMessage id="accountChangeName" />
        </p>
        <Input
          name="accountName"
          variant="long"
          placeholder={intl.formatMessage({
            id: "accountFormPlaceholder",
          })}
          value={accountName}
          label={intl.formatMessage({ id: "accountName" })}
          counter={`${100 - length(accountName)}/100`}
          isPermanentCounter={true}
          maxLength={100}
        />
        <div className={styles.button_block}>
          <Button
            className={styles.change_btn}
            type="submit"
            variant="primarySmall"
          >
            <FormattedMessage id="change" />
          </Button>
          <Button
            className={styles.close_btn}
            onClick={closeModal}
            variant="primarySmall"
          >
            <FormattedMessage id="close" />
          </Button>
        </div>
      </div>
    </div>
  );
};
