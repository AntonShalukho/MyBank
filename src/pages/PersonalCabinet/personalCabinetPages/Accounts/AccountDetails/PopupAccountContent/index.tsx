import React from "react";

import { FormattedMessage } from "react-intl";

import { Button } from "../../../../../../uikit/Button";

import { AccountNameInputBlock } from "../../OpenAccount/AccountNameInputBlock";

import styles from "./PopupAccountContent.module.css";

type ModalContentType = {
  closeModal(): void;
};

export const PopupAccountContent: React.FC<ModalContentType> = ({
  closeModal,
}) => (
  <div className={styles.wrapper}>
    <p className={styles.title}>
      <FormattedMessage id="accountChangeName" />
    </p>
    <AccountNameInputBlock
      className={styles.input_block}
      accountName="accountName"
    />
    <div className={styles.button_block}>
      <Button type="submit">
        <FormattedMessage id="change" />
      </Button>
      <Button className={styles.button_close} onClick={closeModal}>
        <FormattedMessage id="close" />
      </Button>
    </div>
  </div>
);
