type CurrencyType = {
  name: string;
  picture_link: string;
};

export type ClientProductRequestType = {
  id: string;
  bankProductName: string;
  accountName: string;
  currency: CurrencyType;
};

export type ResponseType = string;

export type ClientProductServiceType = (
  body: ClientProductRequestType
) => Promise<ResponseType>;
