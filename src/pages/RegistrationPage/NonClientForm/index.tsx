/* eslint-disable no-nested-ternary */
import React from "react";

import { Navigate } from "react-router";

import { useSelector } from "react-redux";

import { PhoneNumberForm } from "../PhoneNumberForm";

import { SmsForm } from "../../../components/SmsForm";

import { PasswordForm } from "../../../components/PasswordForm";

import { ClientFormProps } from "../../types";

import { SecretQuestionForm } from "../../../components/SecretQuestionForm";

import { EnterInformationForm } from "../EnterInformationForm";

import {
  selectCode,
  selectPassword,
  selectPersonalInfo,
  selectPhoneNum,
} from "../../../redux/selectors/userSelectors";

import { sendNonClientRegistration } from "../../../services/api/sendRegistrationRequest";

export const NonClientForm: React.FC<ClientFormProps> = ({
  activeStep,
  incrementStep,
}) => {
  const phoneNumber = useSelector(selectPhoneNum);
  const newPassword = useSelector(selectPassword);
  const verificationCode = useSelector(selectCode);
  const personalInfo = useSelector(selectPersonalInfo);
  const onNonClientFormSubmit = (
    secretQuestion: string,
    secretQuestionAnswer: string
  ) => {
    const registrationInformation = {
      phoneNumber,
      newPassword,
      confirmPassword: newPassword,
      secretQuestion,
      secretQuestionAnswer,
      verificationCode,
      ...personalInfo!,
    };
    return sendNonClientRegistration(registrationInformation).then(() => {
      incrementStep();
    });
  };
  return (
    <div className="registration-content-input">
      {activeStep < 0 || activeStep === 6 ? (
        <Navigate to="/" />
      ) : activeStep === 0 ? (
        <PhoneNumberForm onSuccessSubmit={incrementStep} />
      ) : activeStep === 1 ? (
        <>
          <SmsForm onSuccessSubmit={incrementStep} />
        </>
      ) : activeStep === 2 ? (
        <>
          <EnterInformationForm onSuccessSubmit={incrementStep} />
        </>
      ) : activeStep === 3 ? (
        <>
          <PasswordForm onSuccessSubmit={incrementStep} />
        </>
      ) : activeStep === 4 ? (
        <>
          <SecretQuestionForm onSubmit={onNonClientFormSubmit} />
        </>
      ) : null}
    </div>
  );
};
