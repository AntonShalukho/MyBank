import { config } from "../../config/config";

import { get } from ".";

export type CardType = {
  currency: string;
  tariff: string;
  expirationDate: string;
  balance: number;
  displayNumber: string;
  paymentSystem: string;
};

export type CardListResponse = {
  data: CardType[];
  error?: Error;
};

export const getCardData = () =>
  get<CardType[]>({
    url: config.api.getCardsData,
  });
