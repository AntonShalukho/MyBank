import {
  COURIER_REGISTRATION_STEP,
  FINAL_REGISTRATION_STEP,
  FINANCIAL_REGISTRATION_STEP,
  OFFLINE_REGISTRATION_STEP,
  ONLINE_REGISTRATION_STEP,
  REGISTRATION_TYPE_REGISTRATION_STEP,
  SIGN_UP_REGISTRATION_STEP,
  VERIFICATION_REGISTRATION_STEP,
} from "../../../../shared/consts/Registration";

import { StepDataType } from "../types";

export const stepData: StepDataType[] = [
  {
    currentStep: 1,
    name: "initialInfo",
    prevSteps: [],
    nextSteps: [2, 3, 4, 5],
    stepDate: [SIGN_UP_REGISTRATION_STEP, VERIFICATION_REGISTRATION_STEP],
  },
  {
    currentStep: 2,
    prevSteps: [1],
    nextSteps: [3, 4, 5],
    name: "financialInfo",
    stepDate: [FINANCIAL_REGISTRATION_STEP],
  },
  {
    currentStep: 3,
    prevSteps: [1, 2],
    nextSteps: [4, 5],
    name: "registrationType",
    stepDate: [REGISTRATION_TYPE_REGISTRATION_STEP],
  },
  {
    currentStep: 4,
    prevSteps: [1, 2, 3],
    nextSteps: [5],
    name: "personalVerification",
    stepDate: [
      ONLINE_REGISTRATION_STEP,
      OFFLINE_REGISTRATION_STEP,
      COURIER_REGISTRATION_STEP,
    ],
  },
  {
    currentStep: 5,
    prevSteps: [1, 2, 3, 4],
    nextSteps: [6],
    name: "registrationConfirmation",
    stepDate: [FINAL_REGISTRATION_STEP],
  },
];
