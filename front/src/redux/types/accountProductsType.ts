export type AccountProductType = {
  name: string;
};

export type AccountProductActionType = {
  type: string;
  payload: string;
};

export type StateType = {
  accountProducts: AccountProductType;
};
