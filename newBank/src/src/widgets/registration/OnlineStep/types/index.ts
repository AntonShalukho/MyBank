import {
  RegistrationRequestType,
  RegistrationResponseType,
} from "src/shared/types/registration";

export type ContentCardProps = {
  icon: string;
  description?: string;
  handleClick(): void;
};

export type ContentWithoutCameraType = {
  onClose(): void;
};

export type OnlineRegistrationResponseType = Pick<
  RegistrationResponseType,
  "uuid" | "Step"
>;
export type OnlineRegistrationRequestType = Pick<
  RegistrationRequestType,
  "uuid"
>;
export type RegistrationTypeRequestType = Pick<
  RegistrationRequestType,
  "uuid" | "type"
>;

export type SuccessPopupType = {
  handleSubmit(): void;
  handleSideEffects(): void;
};

export type UnsuccessSelfieType = {
  onClose(): void;
  isLastAttempt: boolean;
  handleOfflineStep(): void;
  clearPlayVideoInterval(): void;
};

export type FaceIDPhotoType = {
  handleClick(): void;
};

export type CameraPrepareType = {
  handleClick(): void;
};
