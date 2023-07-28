import React from "react";

import { FormattedMessage, useIntl } from "react-intl";

import { Button } from "src/shared/ui/Button";

import { Input } from "src/shared/ui/Input";

import { length } from "ramda";

import { ModalContentType } from "../../types";

import styles from "./ChangeNameInput.module.scss";

export const ChangeNameInput = ({
  closeModal,
  accountName,
}: ModalContentType) => {
  const intl = useIntl();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.title}>
          <FormattedMessage id="widget_changeName" />
        </p>
        <Input
          name="accountName"
          variant="long"
          label={intl.formatMessage({ id: "widget_accountName" })}
          className={styles.input_block}
          placeholder={intl.formatMessage({
            id: "widget_accountFormPlaceholder",
          })}
          value={accountName}
          counter={`${length(accountName)}/100`}
          isPermanentCounter={true}
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
