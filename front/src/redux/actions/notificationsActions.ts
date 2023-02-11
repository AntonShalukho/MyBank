import { AnyAction } from "redux";

import { ThunkAction } from "redux-thunk";

import { NotificationType } from "src/pages/PersonalCabinet/Notifications";

import {
  sendNotificationStatus,
  getNotificationsOptions,
  NotificationsOptionsType,
} from "../../services/api/notifications";

import {
  SET_NOTIFICATIONS_OPTIONS,
  SET_NOTIFICATION_STATUS,
} from "../actionTypes/notificationsActionTypes";

import { RootState } from "../store/store";

const notificationsBackendTypesMap = {
  sms: "smsNotification",
  push: "pushNotification",
  email: "emailNotification",
};

export const setNotificationOptions = (options: NotificationsOptionsType) => ({
  type: SET_NOTIFICATIONS_OPTIONS,
  payload: options,
});

export const updateNotificationStatus = (status: boolean, type: string) => ({
  type: SET_NOTIFICATION_STATUS,
  payload: { type, status },
});

export const setNotificationsOptions =
  (): ThunkAction<Promise<unknown>, RootState, unknown, AnyAction> =>
  (dispatch) =>
    getNotificationsOptions()
      .then((data) => {
        dispatch(setNotificationOptions(data));
      })
      .catch((err) => {
        throw err;
      });

export const setNotificationStatus =
  (
    notificationStatus: boolean,
    notificationType: NotificationType
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch) => {
    dispatch(
      updateNotificationStatus(
        notificationStatus,
        notificationsBackendTypesMap[notificationType]
      )
    );
    sendNotificationStatus(notificationStatus, notificationType).catch(() => {
      dispatch(
        updateNotificationStatus(
          !notificationStatus,
          notificationsBackendTypesMap[notificationType]
        )
      );
    });
  };
