import React, { useRef, useState } from "react";

import { Form, Formik } from "formik";

import { useIntl } from "react-intl";

import classNames from "classnames";

import { sendClientProduct } from "services/api/sendClientProduct";

import { deleteCookie, setCookie } from "utils/cookieHandlers";

import { ConfirmationForm } from "components_v2/ConfirmationForm";

import { CLIENT_PRODUCT_ID, PRODUCTS_ACCOUNT_LIST_PATH } from "utils/variables";

import { useNavigate } from "react-router";

import { Input } from "uikit_v2/Input";

import { length } from "ramda";

import { Button } from "../../../../uikit/Button";

import { AccountCurrencyBlock } from "./AccountCurrencyBlock";

import { CurrencyMockData } from "./AccountMockData";

import { AccountFormValidationSchema } from "./AccountFormValidationSchema";

import { AccountInterestBlock } from "./AccountInterestBlock";

import { AccountPolicyBlock } from "./AccountPolicyBlock";

import { ModalContent } from "./ModalContent";

import { Modal } from "../../../../components_v2/Modal";

import { Popup } from "../../../../components_v2/Popup";

import { SAVING } from "../ListOfAccounts/constants";

import { PopupContent } from "./PopupContent";

import styles from "./OpenAccount.module.css";

export type AccountInitialValues = {
  currency: string;
  interest: string;
  accountName: string;
  isConfirm: boolean;
};

type AccountRequestType = {
  id: string;
  bankProductName: string;
  accountName: string;
  currency: {
    name: string;
    picture_link: string;
  };
};

type OpenAccountType = {
  accountType: string;
};

const initialValues: AccountInitialValues = {
  currency: "PLN",
  interest: CurrencyMockData[0].interest,
  accountName: "",
  isConfirm: false,
};

export const OpenAccount: React.FC<OpenAccountType> = ({ accountType }) => {
  const intl = useIntl();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isSuccessPopup, setIsSuccessPopup] = useState<boolean>(false);
  const [isConfirmation, setIsConfirmation] = useState<boolean>(false);
  const navigate = useNavigate();
  const requestBody = useRef<AccountRequestType>({
    id: "",
    bankProductName: accountType,
    accountName: "",
    currency: {
      name: "PLN",
      picture_link: "",
    },
  });

  const closeConfirmation = () => {
    setIsConfirmation(false);
  };

  const sendRequest = (requestBody: AccountRequestType) => {
    sendClientProduct(requestBody)
      .then((data) => {
        setCookie(CLIENT_PRODUCT_ID, data);
        setIsConfirmation(true);
      })
      .catch((err) => {
        setIsOpenModal(true);
      });
  };

  const handleSubmit = (values: AccountInitialValues) => {
    requestBody.current.accountName = values.accountName;
    requestBody.current.currency.name = values.currency;
    sendRequest(requestBody.current);
  };

  const handleResendForm = () => {
    sendRequest(requestBody.current);
  };

  const onSuccessVerification = () => {
    deleteCookie(CLIENT_PRODUCT_ID);
    setIsSuccessPopup(true);
    setTimeout(() => {
      setIsSuccessPopup(false);
      navigate(PRODUCTS_ACCOUNT_LIST_PATH);
    }, 2000);
  };

  return (
    <div className={styles.wrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={AccountFormValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, getFieldMeta }) => (
          <Form className={styles.account_form}>
            <div
              className={classNames(styles.form_body, {
                [styles.form_body_saving]: accountType === SAVING,
              })}
            >
              <AccountCurrencyBlock currency="currency" interest="interest" />
              {accountType === SAVING && (
                <AccountInterestBlock interest="interest" />
              )}
              <Input
                name="accountName"
                variant="long"
                placeholder={intl.formatMessage({
                  id: "accountFormPlaceholder",
                })}
                value={values.accountName}
                label={intl.formatMessage({ id: "accountName" })}
                counter={`${100 - length(values.accountName)}/100`}
                isPermanentCounter={true}
                maxLength={100}
              />
              <AccountPolicyBlock isConfirm="isConfirm" />
            </div>
            <Button
              type="submit"
              className={classNames(styles.account_submit, {
                [styles.account_submit_active]: getFieldMeta("isConfirm").value,
              })}
            >
              {intl.formatMessage({ id: "accountOpenButton" })}
            </Button>
            {isOpenModal && (
              <Modal
                onClose={() => setIsOpenModal(false)}
                backdrop={true}
                className={styles.modal_wrapper}
              >
                <ModalContent />
              </Modal>
            )}
            {isSuccessPopup && (
              <Popup className={styles.backdrop}>
                <PopupContent />
              </Popup>
            )}
          </Form>
        )}
      </Formik>
      {isConfirmation && (
        <Popup className={styles.backdrop}>
          <ConfirmationForm
            onClose={closeConfirmation}
            resendVerifyCode={handleResendForm}
            onSuccessResponse={onSuccessVerification}
          />
        </Popup>
      )}
    </div>
  );
};
