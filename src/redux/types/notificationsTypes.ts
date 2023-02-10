import { NotificationsOptionsType } from "../../services/api/notifications";

export type NotificationsType = {
  notificationsOptions: NotificationsOptionsType | null;
};

export type NotificationsActionType =
  | {
      type: "SET_NOTIFICATIONS_OPTIONS";
      payload: NotificationsOptionsType;
    }
  | {
      type: "SET_NOTIFICATION_STATUS";
      payload: { type: string; status: boolean };
    };
