import React from "react";

import { FormattedMessage } from "react-intl";

import { UnsuccessIcon } from "../../../../../components_v2/Icon";

import styles from "./ModalContent.module.css";

export const ModalContent = () => (
  <>
    <div className={styles.wrapper}>
      <UnsuccessIcon className={styles.icon} />
      <p className={styles.title}>
        <FormattedMessage id="accountModalLock" />
      </p>
      <p className={styles.description}>
        <FormattedMessage id="accountModalLockDescription" />
      </p>
    </div>
  </>
);
