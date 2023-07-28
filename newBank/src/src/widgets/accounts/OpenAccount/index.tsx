import React, { useRef, useState } from "react";

import { Form, Formik } from "formik";

import { useIntl } from "react-intl";

import classNames from "classnames";

import {
  CLIENT_PRODUCT_ID,
  PRODUCTS_ACCOUNT_LIST_PATH,
  SAVING,
} from "src/shared/consts/accounts";

import { useNavigate, useParams } from "react-router";

import { deleteCookie, setCookie } from "src/shared/lib/cookieHandlers";

import { ConfirmationPopup } from "src/widgets/ConfirmationPopup";

import { SuccessPopup } from "src/entities/SuccessPopup";

import { UnsuccessAccountPopup } from "src/entities/UnsuccessAccountPopup";

import { Input } from "src/shared/ui/Input";

import { Button } from "src/shared/ui/Button";

import { length } from "ramda";

import { CurrencyBlock } from "./components/CurrencyBlock";

import { validationSchema } from "./lib/validationSchema";

import { Interest } from "./components/Interest";

import { Policy } from "./components/Policy";

import { AccountRequestType, AccountInitialValues } from "./types";

import { initialValues } from "./consts";

import { sendClientProduct } from "./api/sendClientProduct";

import styles from "./OpenAccount.module.scss";

export const OpenAccount = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const { accountType } = useParams();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isSuccessPopup, setIsSuccessPopup] = useState<boolean>(false);
  const [isConfirmation, setIsConfirmation] = useState<boolean>(false);

  const requestBody = useRef<AccountRequestType>({
    id: "",
    bankProductName: accountType as string,
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
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, getFieldMeta }) => (
          <Form className={styles.account_form}>
            <div
              className={classNames(styles.form_body, {
                [styles.form_body_saving]: accountType === SAVING,
              })}
            >
              <CurrencyBlock currency="currency" interest="interest" />
              {accountType === SAVING && <Interest interest="interest" />}
              <Input
                name="accountName"
                variant="long"
                label={intl.formatMessage({ id: "widget_accountName" })}
                placeholder={intl.formatMessage({
                  id: "widget_accountFormPlaceholder",
                })}
                value={values.accountName}
                counter={`${100 - length(values.accountName)}/100`}
                isPermanentCounter={true}
                maxLength={100}
              />
              <Policy isConfirm="isConfirm" />
            </div>
            <Button
              variant="primarySmall"
              type="submit"
              className={classNames(styles.account_submit, {
                [styles.account_submit_active]: getFieldMeta("isConfirm").value,
              })}
            >
              {intl.formatMessage({ id: "open" })}
            </Button>
            {isOpenModal && (
              <UnsuccessAccountPopup
                onClose={() => setIsOpenModal(false)}
                backdrop={true}
                className={styles.modal_wrapper}
              />
            )}
            {isSuccessPopup && <SuccessPopup />}
          </Form>
        )}
      </Formik>
      {isConfirmation && (
        <ConfirmationPopup
          onClose={closeConfirmation}
          resendVerifyCode={handleResendForm}
          onSuccessResponse={onSuccessVerification}
        />
      )}
    </div>
  );
};
