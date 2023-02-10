import {
  SET_PHONE_NUM,
  SET_IS_CLIENT,
  SET_PASSWORD,
  SET_SMS_CODE,
  SET_PASSPORT_NUMBER,
  SET_LOCATION,
  SET_PERSONAL_INFO,
  SET_JWT_TOKEN,
  SET_ACCOUNT_INFO,
  SET_USER_CITY,
  SET_CARDS,
  SET_AVATAR,
} from "../actionTypes/userActionTypes";

import { ActionType, UserType } from "../types/userTypes";

export const initialState = {
  isClient: false,
  phoneNum: "",
  password: "",
  passportNumber: "",
  code: "",
  personalInfo: null,
  location: null,
  JWTToken: "",
  accountInfo: null,
  userCity: null,
  notificationsOptions: null,
  cards: null,
  avatar: "",
};

export const userReducer = (
  state: UserType = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case SET_PHONE_NUM:
      return {
        ...state,
        phoneNum: action.payload,
      };

    case SET_IS_CLIENT:
      return {
        ...state,
        isClient: action.payload,
      };

    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };

    case SET_SMS_CODE:
      return {
        ...state,
        code: action.payload,
      };

    case SET_PASSPORT_NUMBER:
      return {
        ...state,
        passportNumber: action.payload,
      };

    case SET_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    case SET_USER_CITY:
      return {
        ...state,
        userCity: action.payload,
      };

    case SET_PERSONAL_INFO:
      return {
        ...state,
        personalInfo: action.payload,
      };

    case SET_JWT_TOKEN:
      return {
        ...state,
        JWTToken: action.payload,
      };

    case SET_ACCOUNT_INFO:
      return {
        ...state,
        accountInfo: action.payload,
      };

    case SET_CARDS:
      return {
        ...state,
        cards: action.payload,
      };

    case SET_AVATAR:
      return {
        ...state,
        avatar: action.payload,
      };

    default:
      return state;
  }
};
