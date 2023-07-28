import {
  COURIER_REGISTRATION_STEP,
  FINAL_REGISTRATION_STEP,
  FINANCIAL_REGISTRATION_STEP,
  INITIAL_REGISTRATION_STEP,
  OFFLINE_REGISTRATION_STEP,
  ONLINE_REGISTRATION_STEP,
  REGISTRATION_TYPE_REGISTRATION_STEP,
  SIGN_UP_REGISTRATION_STEP,
  VERIFICATION_REGISTRATION_STEP,
} from "../../../../shared/consts/Registration";

export type RegistrationStepNumbersType = 1 | 2 | 3 | 4 | 5 | 6;

export type RegistrationParamsType =
  | typeof INITIAL_REGISTRATION_STEP
  | typeof VERIFICATION_REGISTRATION_STEP
  | typeof FINANCIAL_REGISTRATION_STEP
  | typeof REGISTRATION_TYPE_REGISTRATION_STEP
  | typeof ONLINE_REGISTRATION_STEP
  | typeof SIGN_UP_REGISTRATION_STEP
  | typeof OFFLINE_REGISTRATION_STEP
  | typeof FINAL_REGISTRATION_STEP
  | typeof COURIER_REGISTRATION_STEP;

export type StepDataType = {
  currentStep: number;
  prevSteps: RegistrationStepNumbersType[];
  nextSteps: RegistrationStepNumbersType[];
  name: string;
  stepDate: RegistrationParamsType[];
};

export type BackButtonStepType = {
  uuid: string | null;
  currentStepName: string;
};

type StepTwoType = {
  back: string;
  next: null;
};

export type ResponseType = {
  uuid: string | null;
  Step: StepTwoType;
};
