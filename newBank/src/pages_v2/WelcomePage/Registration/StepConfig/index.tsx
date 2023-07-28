import React from "react";

import { useParams } from "react-router";

import { SingUpStepThree } from "../SignUpStepThree";

import { SingUpStepFour } from "../SingUpStepFour";

import { OfflineConfirmationVerification } from "../SingUpStepFour/OfflineConfirmationVerification";

import { SingUpStepOne } from "../SingUpStepOne";

import { SignUpStepTwo } from "../SignUpStepTwo";

import { StepLocation } from "../StepLocation";

import { SingUpStepFive } from "../SingUpStepFive";

import { RegistrationConfirmation } from "../RegistrationConfirmation";

import { CongratulationStep } from "../CongratulationStep";

import {
  SIGN_UP_REGISTRATION_STEP,
  INITIAL_REGISTRATION_STEP,
  FINANCIAL_REGISTRATION_STEP,
  REGISTRATION_TYPE_REGISTRATION_STEP,
  OFFLINE_REGISTRATION_STEP,
  COURIER_REGISTRATION_STEP,
  FINAL_REGISTRATION_STEP,
  ONLINE_REGISTRATION_STEP,
  THE_END_REGISTRATION_STEP,
} from "../../../../utils/variables";

export const StepConfig = () => {
  const { step } = useParams();

  switch (step) {
    case INITIAL_REGISTRATION_STEP:
      return <SingUpStepOne />;
    case SIGN_UP_REGISTRATION_STEP:
      return <SignUpStepTwo />;
    case FINANCIAL_REGISTRATION_STEP:
      return <SingUpStepThree />;
    case REGISTRATION_TYPE_REGISTRATION_STEP:
      return <SingUpStepFour />;
    case ONLINE_REGISTRATION_STEP:
      return <SingUpStepFive />;
    case OFFLINE_REGISTRATION_STEP:
      return <OfflineConfirmationVerification />;
    case COURIER_REGISTRATION_STEP:
      return <StepLocation />;
    case FINAL_REGISTRATION_STEP:
      return <RegistrationConfirmation />;
    case THE_END_REGISTRATION_STEP:
      return <CongratulationStep />;
    default:
      return <SingUpStepOne />;
  }
};
