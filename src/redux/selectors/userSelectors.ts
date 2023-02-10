import { createSelector } from "@reduxjs/toolkit";

import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

import { StateType } from "../types/userTypes";

export const userSelector = (state: StateType) => state.user;
export const selectPhoneNum = createSelector(
  userSelector,
  (user) => user.phoneNum
);
export const selectIsClient = createSelector(
  userSelector,
  (user) => user.isClient
);
export const selectPersonalInfo = createSelector(
  userSelector,
  (user) => user.personalInfo
);

export const selectPassword = createSelector(
  userSelector,
  (user) => user.password
);

export const selectAccountInfo = createSelector(
  userSelector,
  (user) => user.accountInfo
);

export const selectUserName = createSelector(
  userSelector,
  (user) =>
    user.accountInfo &&
    `${capitalizeFirstLetter(
      user.accountInfo?.firstName
    )} ${capitalizeFirstLetter(user.accountInfo?.lastName)}`
);

export const selectEmail = createSelector(
  selectAccountInfo,
  (accountInfo) => accountInfo?.email
);

export const selectCode = createSelector(userSelector, (user) => user.code);

export const selectToken = createSelector(
  userSelector,
  (user) => user.JWTToken
);

export const selectPassportNum = createSelector(
  userSelector,
  (user) => user.passportNumber
);

export const selectLocation = createSelector(
  userSelector,
  (user) => user.location
);

export const selectUserCity = createSelector(
  userSelector,
  (user) => user.userCity
);

export const selectCards = createSelector(userSelector, (user) => user.cards);

export const selectAvatar = createSelector(userSelector, (user) => user.avatar);
