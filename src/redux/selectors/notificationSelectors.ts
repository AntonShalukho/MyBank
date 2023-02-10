import { createSelector } from "@reduxjs/toolkit";

import { StateType } from "../types/userTypes";

export const notificationsSelectors = (state: StateType) => state.notifications;

export const selectNotificationsOptions = createSelector(
  notificationsSelectors,
  (notifications) => notifications.notificationsOptions
);
