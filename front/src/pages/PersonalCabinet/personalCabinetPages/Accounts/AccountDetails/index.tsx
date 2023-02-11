import React, { useEffect, useState } from "react";

import { FormattedMessage } from "react-intl";

import { useLocation, useNavigate } from "react-router";

import { Form, Formik, FormikHelpers } from "formik";

import { BackButtonGreen } from "../../../../../components/BackButtonGreen";

import { CurrentAccountInfo } from "./CurrentAccountInfo";

import { ProductInfoBlock } from "./ProductInfoBlock";

import { AccountInfoBlock } from "./AccountInfoBlock";

import { EditorButton } from "../../../../../components/EditorButton";

import { Popup } from "../../../../../components/Popup";

import { PopupAccountContent } from "./PopupAccountContent";

import {
  AccountDetailsType,
  getAccountDetails,
} from "../../../../../services/api/getAccountDetails";

import { sendAccountDetails } from "../../../../../services/api/sendAccountDetails";

import styles from "./AccountDetails.module.css";

export const AccountDetails = () => {
  const location = useLocation();
  const id = location.state;
  const navigate = useNavigate();
  const initialValue = {
    id: 1,
    bankProductName: "",
    iban: "",
    accountName: "",
    currency: { name: "", picture_link: "" },
    balance: "",
    interest: "",
    openDate: "",
  };
  const [currentAccount, setCurrentAccount] =
    useState<AccountDetailsType>(initialValue);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    getAccountDetails(id).then((data) => {
      setCurrentAccount(data);
      initialValue.accountName = data.accountName;
    });
  }, []);

  const handleEditor = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const handleSubmit = (
    values: AccountDetailsType,
    formikHelpers: FormikHelpers<AccountDetailsType>
  ) => {
    const requestBody = { ...currentAccount, accountName: values.accountName };

    sendAccountDetails(requestBody)
      .then((data) => {
        setCurrentAccount(data);
        formikHelpers.setFieldValue("accountName", data.accountName);
        initialValue.accountName = data.accountName;
        closeModal();
      })
      .catch(() => {
        closeModal();
      });
  };

  return (
    <div className={styles.wrapper}>
      <BackButtonGreen onClick={() => navigate(-1)} />
      <h2 className={styles.title}>
        <FormattedMessage id="AccountDetails" />
      </h2>
      <Formik initialValues={initialValue} onSubmit={handleSubmit}>
        <Form>
          <div className={styles.account}>
            <div className={styles.account_content}>
              <div className={styles.account_content__block}>
                <div className={styles.account_name}>
                  <p className={styles.account_name__title}>
                    {currentAccount.accountName}
                  </p>
                  <EditorButton onClick={handleEditor} />
                </div>
                <ProductInfoBlock account={currentAccount} />
              </div>
              <CurrentAccountInfo account={currentAccount} />
            </div>
            <div className={styles.account_info}>
              <AccountInfoBlock account={currentAccount} />
            </div>
          </div>
          {isOpenModal && (
            <Popup className={styles.backdrop}>
              <PopupAccountContent closeModal={closeModal} />
            </Popup>
          )}
        </Form>
      </Formik>
    </div>
  );
};
