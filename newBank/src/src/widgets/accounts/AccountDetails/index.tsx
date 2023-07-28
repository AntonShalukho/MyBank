import React, { useEffect, useState } from "react";

import { useLocation } from "react-router";

import { Form, Formik, FormikHelpers } from "formik";

import { EditorButton } from "src/shared/ui/EditorButton";

import { AccountsRequestType } from "src/shared/types/accounts";

import { useSpinner } from "src/shared/lib/hooks/useSpinner";

import { CurrentAccountInfo } from "./components/CurrentAccountInfo";

import { ProductInfoBlock } from "./components/ProductInfoBlock";

import { AccountInfoBlock } from "./components/AccountInfoBlock";

import { ChangeNameInput } from "./components/ChangeNameInput";

import { initialValue } from "./consts";

import { getAccountDetails } from "./api/getAccountDetails";

import { sendAccountDetails } from "./api/sendAccountDetails";

import styles from "./AccountDetails.module.scss";

export const AccountDetails = () => {
  const { state } = useLocation();
  const [currentAccount, setCurrentAccount] =
    useState<AccountsRequestType>(initialValue);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { toggleSpinner } = useSpinner();

  useEffect(() => {
    toggleSpinner(true);
    getAccountDetails(state.id)
      .then((data) => {
        setCurrentAccount(data);
        initialValue.accountName = data.accountName;
      })
      .finally(() => toggleSpinner(false));
  }, []);

  const handleEditor = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const handleSubmit = (
    values: AccountsRequestType,
    formikHelpers: FormikHelpers<AccountsRequestType>
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
                <ChangeNameInput
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
