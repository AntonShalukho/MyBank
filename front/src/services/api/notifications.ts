import { get, patch, post } from ".";

import { config } from "../../config/config";

export type NotificationsOptionsResponse = {
  data: NotificationsOptionsType;
  error?: Error;
};

export type NotificationsOptionsType = {
  pushNotification: boolean;
  emailNotification: boolean;
  smsNotification: boolean;
  email: string;
};

export const getNotificationsOptions = () =>
  get<NotificationsOptionsType>({ url: config.api.notificationsUrl });

export const sendNotificationStatus = (
  notificationStatus: boolean,
  endPoint: string
) =>
  patch({
    url: `${config.api.setNotificationsStatus}${endPoint}`,
    body: { notificationStatus },
  });

export const sendEmailVerificationCode = (email: string) =>
  post({
    url: `${config.api.getEmailVerificationCodeUrl}${email}`,
  });

export const sendChangedEmail = (email: string, verificationCode: string) =>
  patch({
    url: `${config.api.changeEmailUrl}`,
    body: { email, verificationCode },
  });
