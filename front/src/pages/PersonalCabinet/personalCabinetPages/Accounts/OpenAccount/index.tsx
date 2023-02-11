import React from "react";

import { Form, Formik } from "formik";

import { useIntl } from "react-intl";

import { useNavigate } from "react-router";

import classNames from "classnames";

import { useSelector } from "react-redux";

import { Button } from "../../../../../uikit/Button";

import { AccountCurrencyBlock } from "./AccountCurrencyBlock";

import { CurrencyMockData } from "./AccountMockData";

import { AccountFormValidationSchema } from "./AccountFormValidationSchema";

import { AccountInterestBlock } from "./AccountInterestBlock";

import { AccountNameInputBlock } from "./AccountNameInputBlock";

import { AccountPolicyBlock } from "./AccountPolicyBlock";

import { ModalContent } from "./ModalContent";

import { Modal } from "../../../../../components/Modal";

import { PopupContent } from "./PopupContent";

import { Popup } from "../../../../../components/Popup";

import { Spinner } from "../../../../../uikit/Spinner";

import { sendAccountProduct } from "../../../../../services/api/sendAccountProduct";

import { CurrencyType } from "../../../../../services/api/getListOfAccounts";

import styles from "./OpenAccount.module.css";

type AccountInitialValues = {
  currency: CurrencyType;
  interest: string;
  accountName: string;
  isConfirm: boolean;
};

type OpenAccountType = {
  accountType: string;
};

const initialValues: AccountInitialValues = {
  currency: { name: "PLN", picture_link: "" },
  interest: CurrencyMockData[0].interest,
  accountName: "",
  isConfirm: false,
};

export const OpenAccount: React.FC<OpenAccountType> = ({ accountType }) => {
  const intl = useIntl();
  const navigate = useNavigate();
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);
  const [isOpenPopup, setIsOpenPopup] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const handleSubmit = (values: AccountInitialValues) => {
    const requestBody = {
      bankProductName: accountType,
      accountName: values.accountName,
      currency: { ...values.currency },
    };
    setIsLoading(true);
    sendAccountProduct(requestBody)
      .then(() => {
        setIsOpenPopup(true);
        setTimeout(() => {
          setIsOpenPopup(false);
          navigate("/cabinet/accounts/list-of-accounts");
        }, 2000);
      })
      .catch(() => {
        setIsOpenModal(true);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        {intl.formatMessage({ id: "accountOpenButton" })}
        {"\n"}
        {accountType === "Current"
          ? intl.formatMessage({ id: "openAccountCurrentTitle" })
          : intl.formatMessage({ id: "openAccountSavingTitle" })}
        {"\n"}
        {intl.formatMessage({ id: "openAccountThirdWord" })}
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={AccountFormValidationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.account_form}>
          <div
            className={classNames(styles.form_body, {
              [styles.form_body_saving]: accountType === "Saving",
            })}
          >
            <AccountCurrencyBlock currency="currency" interest="interest" />
            {accountType === "Saving" && (
              <AccountInterestBlock interest="interest" />
            )}
            <AccountNameInputBlock accountName="accountName" />
            <AccountPolicyBlock isConfirm="isConfirm" />
          </div>
          <Button type="submit" className={styles.account_submit}>
            {intl.formatMessage({ id: "accountOpenButton" })}
          </Button>
          {isOpenModal && (
            <Modal
              onClose={() => setIsOpenModal(false)}
              backdrop={true}
              className={styles.modal_wrapper}
            >
              <ModalContent closeModal={closeModal} />
            </Modal>
          )}
          {isOpenPopup && (
            <Popup className={styles.backdrop}>
              <PopupContent />
            </Popup>
          )}
          {isLoading && (
            <div className={styles.backdrop}>
              <Spinner />
            </div>
          )}
        </Form>
      </Formik>
    </div>
  );
};
