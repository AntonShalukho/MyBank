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
} from "../../../../utils/variables";

import styles from "./ProgressBar.module.css";

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

export type StepBoxDataType = {
  currentStep: number;
  prevSteps: RegistrationStepNumbersType[];
  nextSteps: RegistrationStepNumbersType[];
  name: string;
  stepDate: RegistrationParamsType[];
};

export const StepBoxData: StepBoxDataType[] = [
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

const handleCurrentStepNumber = (step: RegistrationParamsType): number => {
  const currentStepDate = StepBoxData.find((date) =>
    date.stepDate.includes(step)
  );
  return currentStepDate ? currentStepDate.currentStep : 6;
};

export const getStepStylesNum = (
  stepBar: StepBoxDataType,
  step: RegistrationParamsType
): string => {
  const { currentStep, prevSteps, nextSteps } = stepBar;
  const progressStep = handleCurrentStepNumber(step);

  if (progressStep + 1 === currentStep) {
    return styles.step_number_nextStep;
  }
  if (prevSteps.includes(progressStep as RegistrationStepNumbersType)) {
    return styles.step_number_next;
  }
  if (
    progressStep === currentStep ||
    nextSteps.includes(progressStep as RegistrationStepNumbersType)
  ) {
    return styles.step_number_previous;
  }
  if (progressStep === 6) {
    return styles.step_number_previous;
  }

  return "";
};

export const getStepStylesBtn = (
  stepBar: StepBoxDataType,
  step: RegistrationParamsType
): string => {
  const { currentStep, prevSteps, nextSteps } = stepBar;
  const progressStep = handleCurrentStepNumber(step);

  if (progressStep + 1 === currentStep) {
    return styles.step_button_nextStep;
  }
  if (prevSteps.includes(progressStep as RegistrationStepNumbersType)) {
    return styles.step_button_next;
  }
  if (
    progressStep === currentStep ||
    nextSteps.includes(progressStep as RegistrationStepNumbersType)
  ) {
    return styles.step_button_previous;
  }
  if (progressStep === 6) {
    return styles.step_button_previous;
  }
  return "";
};
