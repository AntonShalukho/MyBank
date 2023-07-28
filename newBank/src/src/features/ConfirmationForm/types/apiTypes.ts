export type SendVerificationCodeType = {
  uuid: string;
  code: string;
};

export type ResponseType = {
  uuid: string;
  Step: StepsType;
};

export type StepsType = {
  back: string;
  next: string;
};

export type SendClientProductVerifyCodeType = (
  data: SendVerificationCodeType
) => Promise<ResponseType>;

export type SendVerificationEmailCodeType = (
  data: SendVerificationCodeType
) => Promise<ResponseType>;

export type SendLoginVerificationCodeType = (
  data: SendVerificationCodeType
) => Promise<void>;

export type VerifyCodeHandlerType = (
  pathname: string
) =>
  | SendClientProductVerifyCodeType
  | SendLoginVerificationCodeType
  | SendLoginVerificationCodeType;
