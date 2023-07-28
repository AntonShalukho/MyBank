import React from "react";

import { useParams } from "react-router";

import { FinancialStep } from "src/widgets/registration/FinancialStep";

import { RegistrationTypeStep } from "src/widgets/registration/RegistrationTypeStep";

import { OfflineConfirmationVerification } from "src/widgets/registration/RegistrationTypeStep/components/OfflineConfirmationVerification";

import { StartStep } from "src/widgets/registration/StartStep";

import { SignUpStep } from "src/widgets/registration/SignUpStep";

import { OfflineStep } from "src/widgets/registration/OfflineStep";

import { OnlineStep } from "src/widgets/registration/OnlineStep";

import { RegistrationConfirmationStep } from "src/widgets/registration/RegistrationConfirmationStep";

import { CongratulationStep } from "src/widgets/registration/CongratulationStep";

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
} from "src/shared/consts/Registration";

export const StepConfig = () => {
  const { step } = useParams();

  switch (step) {
    case INITIAL_REGISTRATION_STEP:
      return <StartStep />;
    case SIGN_UP_REGISTRATION_STEP:
      return <SignUpStep />;
    case FINANCIAL_REGISTRATION_STEP:
      return <FinancialStep />;
    case REGISTRATION_TYPE_REGISTRATION_STEP:
      return <RegistrationTypeStep />;
    case ONLINE_REGISTRATION_STEP:
      return <OnlineStep />;
    case OFFLINE_REGISTRATION_STEP:
      return <OfflineConfirmationVerification />;
    case COURIER_REGISTRATION_STEP:
      return <OfflineStep />;
    case FINAL_REGISTRATION_STEP:
      return <RegistrationConfirmationStep />;
    case THE_END_REGISTRATION_STEP:
      return <CongratulationStep />;
    default:
      return <StartStep />;
  }
};
