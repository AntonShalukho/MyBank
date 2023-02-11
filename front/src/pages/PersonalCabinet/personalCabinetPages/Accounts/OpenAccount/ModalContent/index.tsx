import React from "react";

import { FormattedMessage } from "react-intl";

import { Link } from "react-router-dom";

import { LockForModal } from "../../../../../../components/Icons";

import styles from "./ModalContent.module.css";

type ModalContentType = {
  closeModal(): void;
};

export const ModalContent: React.FC<ModalContentType> = ({ closeModal }) => (
  <>
    <div className={styles.wrapper}>
      <LockForModal />
      <p className={styles.title}>
        <FormattedMessage id="accountModalLock" />
      </p>
      <p className={styles.description}>
        <FormattedMessage id="accountModalLockDescription" />
      </p>
      <Link className={styles.link} to="/contacts" onClick={closeModal}>
        <FormattedMessage id="accountModalButton" />
      </Link>
    </div>
  </>
);
