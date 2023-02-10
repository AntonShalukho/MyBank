import { LatLngTuple } from "leaflet";

import { AccountInfoType } from "../../services/api/clientInformation";

import { CardType } from "../../services/api/getCardList";

import { MapType } from "./mapTypes";

import { TransactionsType } from "./transactionTypes";

import { NotificationsType } from "./notificationsTypes";

export type PersonalInfoType = {
  firstName: string;
  middleName: string;
  lastName: string;
  passportNumber: string;
  isUsResident: string;
};

export type UserType = {
  phoneNum: string;
  isClient: boolean;
  password: string;
  code: string;
  passportNumber: string;
  location: LatLngTuple | null;
  personalInfo: PersonalInfoType | null;
  JWTToken: string;
  accountInfo: AccountInfoType | null;
  userCity: string | null;
  cards: CardType[] | null;
  notificationsOptions: NotificationsType | null;
  avatar: string;
};

export type ActionType = {
  type: string;
  payload: string | boolean;
};

export type StateType = {
  user: UserType;
  map: MapType;
  notifications: NotificationsType;
  transactions: TransactionsType;
};
