/* eslint-disable functional/no-throw-statement */
import { AnyAction } from "redux";

import { LatLngExpression } from "leaflet";

import { ThunkAction } from "redux-thunk";

import {
  SET_AVATAR,
  SET_UPLOADED_AVATAR,
  SET_PHONE_NUM,
  SET_IS_CLIENT,
  SET_PASSWORD,
  SET_SMS_CODE,
  SET_PASSPORT_NUMBER,
  SET_LOCATION,
  SET_PERSONAL_INFO,
  SET_JWT_TOKEN,
  SET_ACCOUNT_INFO,
  SET_NOTIFICATIONS_OPTIONS,
  SET_USER_CITY,
  SET_CARDS,
} from "../actionTypes/userActionTypes";

import { CardType, getCardData } from "../../services/api/getCardList";

import { setCookie } from "../../utils/cookieHandlers";

import { RootState } from "../store/store";

import { sendPhoneNumber } from "../../services/api/sendPhoneNumber";

import {
  AccountInfoType,
  getAccountInfo,
} from "../../services/api/clientInformation";

import { PersonalInfoType } from "../types/userTypes";

import { sendLoginRequest } from "../../services/api/sendLoginRequest";

import { NotificationsType } from "../types/notificationsTypes";

import { getProfilePicture } from "../../services/api/userAvatar";

export const setPhoneNum = (phoneNum: string) => ({
  type: SET_PHONE_NUM,
  payload: phoneNum,
});

export const setIsClient = (isClient: boolean) => ({
  type: SET_IS_CLIENT,
  payload: isClient,
});

export const setSmsCode = (code: string) => ({
  type: SET_SMS_CODE,
  payload: code,
});

export const setPassword = (password: string) => ({
  type: SET_PASSWORD,
  payload: password,
});

export const setPassportNumber = (passportNumber: string) => ({
  type: SET_PASSPORT_NUMBER,
  payload: passportNumber,
});

export const setLocation = (location: LatLngExpression | null) => ({
  type: SET_LOCATION,
  payload: location,
});

export const setPersonalInfo = (personalInfo: PersonalInfoType) => ({
  type: SET_PERSONAL_INFO,
  payload: personalInfo,
});

export const setJWTToken = (token: string) => ({
  type: SET_JWT_TOKEN,
  payload: token,
});

export const setNotificationOptions = (options: NotificationsType) => ({
  type: SET_NOTIFICATIONS_OPTIONS,
  payload: options,
});

export const setUserCity = (city: string) => ({
  type: SET_USER_CITY,
  payload: city,
});

export const setAccountInfo = (accountInfo: AccountInfoType | null) => ({
  type: SET_ACCOUNT_INFO,
  payload: accountInfo,
});

export const getIsClient =
  (
    phoneNum: string
  ): ThunkAction<Promise<unknown>, RootState, unknown, AnyAction> =>
  (dispatch) =>
    sendPhoneNumber(phoneNum)
      .then((data) => {
        dispatch(setIsClient(data.isClient));
      })
      .catch((err) => {
        throw err;
      });

export const setAccountInfoToStore =
  (): ThunkAction<Promise<unknown>, RootState, unknown, AnyAction> =>
  (dispatch) =>
    getAccountInfo().then((data) => {
      dispatch(setAccountInfo(data));
    });

export const logging =
  (
    login: string,
    password: string,
    type: string
  ): ThunkAction<Promise<unknown>, RootState, unknown, AnyAction> =>
  (dispatch) =>
    sendLoginRequest(login, password, type).then((data) => {
      setCookie("token", data.jwtToken);
      dispatch(setAccountInfoToStore());
    });

export const setCards = (cards: CardType[]) => ({
  type: SET_CARDS,
  payload: cards,
});

export const setCardsToStore =
  (): ThunkAction<Promise<unknown>, RootState, unknown, AnyAction> =>
  (dispatch) =>
    getCardData()
      .then((data) => {
        dispatch(setCards(data));
      })
      .catch((err) => {
        throw err;
      });

export const setAvatar = (avatar: string) => ({
  type: SET_AVATAR,
  payload: avatar,
});

export const setAvatarToStore =
  (): ThunkAction<Promise<unknown>, RootState, unknown, AnyAction> =>
  (dispatch) =>
    getProfilePicture()
      .then((data) => {
        dispatch(setAvatar(data));
      })
      .catch((err) => {
        throw err;
      });
