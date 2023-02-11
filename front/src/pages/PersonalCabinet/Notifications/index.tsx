import React, { useEffect, useRef, useState } from "react";

import { Form, Formik } from "formik";

import { flushSync } from "react-dom";

import { useSelector } from "react-redux";

import { FormattedMessage } from "react-intl";

import { selectEmail } from "../../../redux/selectors/userSelectors";

import { useTypedDispatch } from "../../../redux/store/store";

import {
  setNotificationsOptions,
  setNotificationStatus,
} from "../../../redux/actions/notificationsActions";

import { selectNotificationsOptions } from "../../../redux/selectors/notificationSelectors";

import { sendEmailVerificationCode } from "../../../services/api/notifications";

import { Input } from "../../../uikit/Input";

import { Button } from "../../../uikit/Button";

import { Pencil } from "../../../components/Icons";

import { ToggleButton } from "../../../uikit/ToggleButton";

import { Modal } from "../../../components/Modal";

import { NotificationModalContent } from "./NotificationModalContent";

import { validationSchema } from "./validation";

import "./NotificationsStyles.css";

export type NotificationType = "sms" | "push" | "email";

export const Notifications = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const notifications = useSelector(selectNotificationsOptions);
  const email = useSelector(selectEmail) || "";
  const [prevEmailValue, setPrevEmailValue] = useState<string | null>(email!);
  const ref = useRef<HTMLInputElement>(null);
  const emailRef = useRef<string>("");
  const dispatch = useTypedDispatch();

  const onSubmit = (values: { email: string | undefined }) => {
    if (values.email! === prevEmailValue) {
      setIsFocused(false);
      return;
    }

    const userEmail = values.email;

    if (userEmail) {
      emailRef.current = userEmail;
      sendEmailVerificationCode(userEmail);
    }
    setIsModalOpen(true);
    setIsFocused(false);
  };

  const clickChangeButtonHandler = () => {
    flushSync(() => setIsFocused(true));
    ref.current?.focus();
  };

  const handleToggle = (type: NotificationType, status: boolean) =>
    dispatch(setNotificationStatus(status, type));

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsFocused(false);
  };

  useEffect(() => {
    dispatch(setNotificationsOptions());
  }, [dispatch]);

  return (
    <>
      <div className="notifications-container">
        <h4>
          <FormattedMessage id="toChangeEmail" />
        </h4>
        <p className="notification-description">
          <FormattedMessage id="changeEmailInfo" />
        </p>
        <div className="email-input-container notification-container">
          <Formik
            initialValues={{ email }}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form className="email-form">
              <Input
                className="notifications-input"
                name="email"
                type="email"
                disabled={!isFocused}
                ref={ref}
              />

              {isFocused && (
                <Button type="submit" variant="form" className="email-button">
                  <FormattedMessage id="submit" />
                </Button>
              )}
            </Form>
          </Formik>
          {!isFocused && (
            <Button
              variant="form"
              className="email-button change-email"
              onClick={clickChangeButtonHandler}
            >
              <Pencil />
            </Button>
          )}

          {notifications && (
            <div className="toggle-notifications-container">
              <div className="toggle-block">
                <p>
                  <FormattedMessage id="emailNotifications" />
                </p>
                <ToggleButton
                  isActive={notifications.emailNotification}
                  handleToggle={() =>
                    handleToggle("email", !notifications.emailNotification)
                  }
                />
              </div>
              <div className="toggle-block">
                <p>
                  <FormattedMessage id="smsNotifications" />
                </p>
                <ToggleButton
                  isActive={notifications.smsNotification}
                  handleToggle={() => {
                    handleToggle("sms", !notifications.smsNotification);
                  }}
                />
              </div>
              <div className="toggle-block">
                <p>
                  <FormattedMessage id="pushNotifications" />
                </p>
                <ToggleButton
                  isActive={notifications.pushNotification}
                  handleToggle={() => {
                    handleToggle("push", !notifications.pushNotification);
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      {isModalOpen && (
        <Modal
          className="notification-modal"
          onClose={handleCloseModal}
          backdrop={true}
        >
          <NotificationModalContent
            onSuccessSubmit={handleCloseModal}
            onErrorSubmit={() => setIsModalOpen(false)}
            changedUserEmail={emailRef.current}
          />
        </Modal>
      )}
    </>
  );
};
