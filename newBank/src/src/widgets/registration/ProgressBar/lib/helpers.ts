import { stepData } from "../assets/stepData";

import {
  RegistrationParamsType,
  RegistrationStepNumbersType,
  StepDataType,
} from "../types";

import styles from "../ProgressBar.module.scss";

const handleCurrentStepNumber = (step: RegistrationParamsType): number => {
  const currentStepDate = stepData.find((date) => date.stepDate.includes(step));
  return currentStepDate ? currentStepDate.currentStep : 6;
};

export const getStepStylesNum = (
  stepBar: StepDataType,
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
  stepBar: StepDataType,
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
