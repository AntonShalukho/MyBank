import {
  SET_NOTIFICATIONS_OPTIONS,
  SET_NOTIFICATION_STATUS,
} from "../actionTypes/notificationsActionTypes";

import {
  NotificationsActionType,
  NotificationsType,
} from "../types/notificationsTypes";

export const initialState = {
  notificationsOptions: null,
  email: "",
};

export const notificationsReducer = (
  state: NotificationsType = initialState,
  action: NotificationsActionType
) => {
  switch (action.type) {
    case SET_NOTIFICATIONS_OPTIONS:
      return { ...state, notificationsOptions: action.payload };

    case SET_NOTIFICATION_STATUS: {
      const { type, status } = action.payload;
      const newNotificationOptions = {
        ...state.notificationsOptions,
        [type]: status,
      };
      return { ...state, notificationsOptions: newNotificationOptions };
    }

    default:
      return state;
  }
};
