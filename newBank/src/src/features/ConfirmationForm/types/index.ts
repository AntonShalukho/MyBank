import { ResponseType } from "./apiTypes";

export type ConfirmationFormType = {
  onClose(): void;
  onSuccessResponse: (data?: ResponseType) => void;
  resendVerifyCode: () => void;
};

export type InitialEmailFormType = {
  firstInput: string;
  secondInput: string;
  thirdInput: string;
  fourthInput: string;
  fifthInput: string;
  sixthInput: string;
};

export type EmailFormInputType = {
  handleVerificationCode: (value: string) => void;
  handleVerificationCodeBack: (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => void;
  handlePaste: (e: React.ClipboardEvent<HTMLInputElement>) => void;
  name: string;
  id: string;
  formikValue: string;
  isErrors: boolean;
  isActive: boolean;
};

type IsExpiredType = {
  isCodeExpired: boolean;
  SetIsCodeExpired: (value: boolean) => void;
};

export type EmailFormTimerType = {
  isExpiredMap: IsExpiredType;
};
