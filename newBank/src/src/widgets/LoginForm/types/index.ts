type StepsType = {
  back: string;
  next: string;
};

export type SendLoginDataType = {
  email: string;
  password: string;
};

export type ResponseType = {
  uuid: string;
  Step: StepsType;
};
