import React, { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router";

import { Form, Formik, FormikHelpers } from "formik";

import { useDispatch } from "react-redux";

import { toggleSpinner } from "redux/actions/spinnerAction";

import { CurrentAccountInfo } from "./CurrentAccountInfo";

import { ProductInfoBlock } from "./ProductInfoBlock";

import { AccountInfoBlock } from "./AccountInfoBlock";

import { EditorButton } from "../../../../components_v2/EditorButton";

import { PopupAccountContent } from "./PopupAccountContent";

import {
  AccountDetailsType,
  getAccountDetails,
} from "../../../../services/api/getAccountDetails";

import { sendAccountDetails } from "../../../../services/api/sendAccountDetails";

import styles from "./AccountDetails.module.css";

export const AccountDetails = () => {
  const location = useLocation();
  const id = location.state;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValue = {
    id: 1,
    bankProductName: "",
    iban: "",
    accountName: "",
    currency: {
      name: "",
      picture_link: "",
    },
    balance: "",
    interest: "",
    openDate: "",
  };
  const [currentAccount, setCurrentAccount] =
    useState<AccountDetailsType>(initialValue);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    dispatch(toggleSpinner(true));
    getAccountDetails(id)
      .then((data) => {
        setCurrentAccount(data);
        initialValue.accountName = data.accountName;
      })
      .finally(() => dispatch(toggleSpinner(false)));
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
    toggleSpinner(true);
    sendAccountDetails(requestBody)
      .then((data) => {
        setCurrentAccount(data);
        formikHelpers.setFieldValue("accountName", data.accountName);
        initialValue.accountName = data.accountName;
        closeModal();
      })
      .catch(() => {
        closeModal();
      })
      .finally(() => toggleSpinner(false));
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Formik initialValues={initialValue} onSubmit={handleSubmit}>
          {({ values }) => (
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
                  <div className={styles.account_number}>
                    <CurrentAccountInfo account={currentAccount} />
                  </div>
                </div>
                <div className={styles.account_info}>
                  <AccountInfoBlock account={currentAccount} />
                </div>
              </div>
              {isOpenModal && (
                <PopupAccountContent
                  closeModal={closeModal}
                  accountName={values.accountName}
                />
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
